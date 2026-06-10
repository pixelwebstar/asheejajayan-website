"use client";

import React, { useState, useEffect, useRef } from "react";

interface CardData {
  id: string;
  num: string;
  title: string;
  desc: string;
}

const initialCards: CardData[] = [
  {
    id: "box-1",
    num: "01",
    title: "Customer Fills Form",
    desc: "When a customer wants to hire you, they fill out a simple contact form on your website with their name and email."
  },
  {
    id: "box-2",
    num: "02",
    title: "Leads Are Saved",
    desc: "Their details are saved automatically in your list. You do not have to write anything down, and you will never lose a lead."
  },
  {
    id: "box-3",
    num: "03",
    title: "Get Text Notification",
    desc: "You get a text message on your phone right away. This lets you call the customer back fast before they look for someone else."
  }
];

interface PhysicsBody {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  angle: number;
  va: number; // angular velocity
  targetX: number;
  targetY: number;
}

export default function GravityBentoGrid() {
  const [gravityActive, setGravityActive] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [bodies, setBodies] = useState<PhysicsBody[]>([]);
  const requestRef = useRef<number | null>(null);
  const isDraggingRef = useRef<string | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [draggingId, setDraggingId] = useState<string | null>(null);

  // Store layout locations of cards in static mode
  const [staticLayouts, setStaticLayouts] = useState<Record<string, { x: number; y: number; w: number; h: number }>>({});

  // Capture static layouts on load or window resize
  const captureLayouts = React.useCallback(() => {
    if (gravityActive) return;
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const layouts: Record<string, { x: number; y: number; w: number; h: number }> = {};

    initialCards.forEach((card) => {
      const el = cardRefs.current[card.id];
      if (el) {
        const rect = el.getBoundingClientRect();
        layouts[card.id] = {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
          w: rect.width,
          h: rect.height
        };
      }
    });

    setStaticLayouts(layouts);
  }, [gravityActive]);

  useEffect(() => {
    captureLayouts();
    window.addEventListener("resize", captureLayouts);
    return () => window.removeEventListener("resize", captureLayouts);
  }, [captureLayouts]);

  // Handle gravity toggle
  const toggleGravity = () => {
    if (!gravityActive) {
      // Initialize physics bodies at their current layout positions
      const newBodies: PhysicsBody[] = initialCards.map((card) => {
        const layout = staticLayouts[card.id] || { x: 200, y: 150, w: 350, h: 250 };
        return {
          id: card.id,
          x: layout.x,
          y: layout.y,
          vx: (Math.random() - 0.5) * 4,
          vy: Math.random() * -5 - 2,
          width: layout.w,
          height: layout.h,
          angle: 0,
          va: (Math.random() - 0.5) * 0.05,
          targetX: layout.x,
          targetY: layout.y
        };
      });
      setBodies(newBodies);
      setGravityActive(true);
    } else {
      // Spring back to target layouts
      setGravityActive(false);
    }
  };

  const updatePhysicsRef = useRef<() => void>(() => {});

  // Physics engine loop
  const updatePhysics = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const groundY = containerRect.height;
    const rightX = containerRect.width;

    setBodies((prevBodies) => {
      // Map and update each body
      const updated = prevBodies.map((b) => {
        // If user is dragging this body, let it follow the mouse
        if (isDraggingRef.current === b.id) {
          const dx = mouseRef.current.x - b.x;
          const dy = mouseRef.current.y - b.y;
          // Apply a spring force to drag the card
          b.vx = dx * 0.2;
          b.vy = dy * 0.2;
          b.angle += (0 - b.angle) * 0.1; // Reduce rotation while dragging
          b.va = 0;
        } else {
          if (gravityActive) {
            // Apply gravity and drag
            b.vy += 0.5; // Gravity
            b.vx *= 0.98; // Air friction
            b.vy *= 0.98;
            b.va *= 0.95; // Rotational friction

            b.x += b.vx;
            b.y += b.vy;
            b.angle += b.va;

            // Bounce off ground
            const halfH = b.height / 2;
            const halfW = b.width / 2;

            if (b.y + halfH > groundY) {
              b.y = groundY - halfH;
              b.vy = -b.vy * 0.55; // Restitution
              b.vx *= 0.8; // Friction on ground
              b.va = -b.vx * 0.02; // Rotation matching roll friction
            }

            // Bounce off ceiling (soft)
            if (b.y - halfH < 0) {
              b.y = halfH;
              b.vy = -b.vy * 0.55;
            }

            // Bounce off left wall
            if (b.x - halfW < 0) {
              b.x = halfW;
              b.vx = -b.vx * 0.55;
              b.va += b.vy * 0.01;
            }

            // Bounce off right wall
            if (b.x + halfW > rightX) {
              b.x = rightX - halfW;
              b.vx = -b.vx * 0.55;
              b.va -= b.vy * 0.01;
            }
          } else {
            // Spring back mode (interpolation back to static grid target)
            const dx = b.targetX - b.x;
            const dy = b.targetY - b.y;
            b.x += dx * 0.12;
            b.y += dy * 0.12;
            b.angle += (0 - b.angle) * 0.15;
            b.vx = 0;
            b.vy = 0;
          }
        }
        return b;
      });

      // Simple collision resolution between cards (AABB approximation)
      if (gravityActive) {
        for (let i = 0; i < updated.length; i++) {
          for (let j = i + 1; j < updated.length; j++) {
            const b1 = updated[i];
            const b2 = updated[j];

            const dx = b2.x - b1.x;
            const dy = b2.y - b1.y;
            const overlapX = (b1.width / 2 + b2.width / 2) - Math.abs(dx);
            const overlapY = (b1.height / 2 + b2.height / 2) - Math.abs(dy);

            if (overlapX > 0 && overlapY > 0) {
              // Collide on the axis of least penetration
              if (overlapX < overlapY) {
                const push = overlapX / 2;
                if (dx > 0) {
                  b1.x -= push;
                  b2.x += push;
                } else {
                  b1.x += push;
                  b2.x -= push;
                }
                // Swap velocities
                const tempVx = b1.vx;
                b1.vx = b2.vx * 0.6;
                b2.vx = tempVx * 0.6;
              } else {
                const push = overlapY / 2;
                if (dy > 0) {
                  b1.y -= push;
                  b2.y += push;
                } else {
                  b1.y += push;
                  b2.y -= push;
                }
                // Swap velocities
                const tempVy = b1.vy;
                b1.vy = b2.vy * 0.6;
                b2.vy = tempVy * 0.6;
              }
            }
          }
        }
      }

      // Check if all items are fully back in position during spring back
      if (!gravityActive) {
        const settled = updated.every(
          (b) => Math.abs(b.targetX - b.x) < 0.1 && Math.abs(b.targetY - b.y) < 0.1 && Math.abs(b.angle) < 0.01
        );
        if (settled) {
          // Turn off animation loop
          if (requestRef.current) {
            cancelAnimationFrame(requestRef.current);
            requestRef.current = null;
          }
          return [];
        }
      }

      return [...updated];
    });

    if (gravityActive || requestRef.current !== null) {
      requestRef.current = requestAnimationFrame(updatePhysicsRef.current);
    }
  };

  useEffect(() => {
    updatePhysicsRef.current = updatePhysics;
  });


  useEffect(() => {
    if (gravityActive) {
      requestRef.current = requestAnimationFrame(updatePhysicsRef.current);
    } else if (bodies.length > 0) {
      requestRef.current = requestAnimationFrame(updatePhysicsRef.current);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [gravityActive, bodies.length]);

  // Track Mouse movement relative to container
  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseDown = (id: string) => {
    if (!gravityActive) return;
    isDraggingRef.current = id;
    setDraggingId(id);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = null;
    setDraggingId(null);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  const hasFallenState = gravityActive || bodies.length > 0;

  return (
    <div className="space-y-8 w-full">
      {/* Gravity Trigger Control Panel */}
      <div className="flex justify-center md:justify-end">
        <button
          onClick={toggleGravity}
          className={`relative inline-flex h-9 w-44 items-center justify-center rounded-full border text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${
            gravityActive
              ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-950/20"
              : "bg-white border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-700"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${gravityActive ? "bg-red-400 animate-pulse" : "bg-slate-300"}`} />
            {gravityActive ? "GRAVITY ACTIVE" : "COLLAPSE GRID"}
          </span>
        </button>
      </div>

      {/* Physics Stage wrapper */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={`relative w-full transition-all duration-500 min-h-[320px] ${
          hasFallenState ? "bg-slate-50/50 rounded-3xl border border-slate-100/80 p-0 overflow-hidden" : ""
        }`}
        style={{
          height: hasFallenState ? "550px" : "auto"
        }}
      >
        {!hasFallenState ? (
          /* Standard static CSS grid (Fully responsive, layout is captured from this state) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {initialCards.map((card) => (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[card.id] = el;
                }}
                className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-8"
              >
                <span className="text-6xl font-black text-slate-200 block leading-none select-none">{card.num}</span>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{card.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Physics Canvas state - absolute bodies tracked by the animation loop */
          <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
            {bodies.map((b) => {
              const card = initialCards.find((c) => c.id === b.id);
              if (!card) return null;
              const isDragging = draggingId === b.id;
              return (
                <div
                  key={b.id}
                  onMouseDown={() => handleMouseDown(b.id)}
                  className={`absolute bg-white p-6 sm:p-8 rounded-3xl border shadow-md flex flex-col justify-between space-y-4 select-none ${
                    isDragging
                      ? "border-slate-900 shadow-lg cursor-grabbing scale-[1.01]"
                      : gravityActive
                      ? "border-slate-200 cursor-grab hover:border-slate-400 shadow-sm"
                      : "border-slate-100 shadow-xs transition-shadow"
                  }`}
                  style={{
                    left: `${b.x}px`,
                    top: `${b.y}px`,
                    width: `${b.width}px`,
                    height: `${b.height}px`,
                    transform: `translate3d(-50%, -50%, 0) rotate(${b.angle}rad)`,
                    transformOrigin: "center center",
                    zIndex: isDragging ? 50 : 10,
                    willChange: "transform, left, top"
                  }}
                >
                  <span className="text-4xl sm:text-5xl font-black text-slate-100 block leading-none select-none">{card.num}</span>
                  <div className="space-y-2 select-none pointer-events-none">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">{card.title}</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
