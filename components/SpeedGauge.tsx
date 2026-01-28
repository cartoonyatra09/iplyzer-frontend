"use client";

import { useEffect, useRef } from "react";

interface SpeedGaugeProps {
  speed: number;
  maxSpeed?: number;
  label: string;
  unit?: string;
}

export default function SpeedGauge({ 
  speed, 
  maxSpeed = 200, 
  label,
  unit = "Mbps" 
}: SpeedGaugeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;

    // Background circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#e5e7eb";
    ctx.lineWidth = 12;
    ctx.stroke();

    // Speed arc
    const percentage = Math.min(speed / maxSpeed, 1);
    const endAngle = percentage * 2 * Math.PI - Math.PI / 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, endAngle);
    
    // Color based on speed
    let color = "#84cc16"; // lime-500
    if (speed < 10) color = "#ef4444"; // red-500
    else if (speed < 25) color = "#f59e0b"; // amber-500
    else if (speed < 50) color = "#3b82f6"; // blue-500
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 12;
    ctx.lineCap = "round";
    ctx.stroke();

    // Speed text
    ctx.fillStyle = "#111827";
    ctx.font = "bold 32px system-ui";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(speed.toFixed(1), centerX, centerY - 10);

    // Unit text
    ctx.fillStyle = "#6b7280";
    ctx.font = "14px system-ui";
    ctx.fillText(unit, centerX, centerY + 20);

  }, [speed, maxSpeed, unit]);

  return (
    <div className="flex flex-col items-center">
      <canvas 
        ref={canvasRef} 
        width={200} 
        height={200}
        className="mb-2"
      />
      <p className="text-sm font-medium text-gray-600">{label}</p>
    </div>
  );
}
