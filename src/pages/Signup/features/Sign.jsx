import React, { useEffect, useRef } from 'react';
import { formFields } from '../../../utils/data';

const SignUpForm = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Ball {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 30 + 10;
        this.vx = Math.random() * 6 - 3;
        this.vy = Math.random() * 6 - 3;
        this.color = Math.random() < 0.5 ? '#FFEB9A' : 'black';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
          this.vx *= -1;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
          this.vy *= -1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }
    }

    const balls = Array.from({ length: 30 }, () => new Ball());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.forEach(ball => {
        ball.update();
        ball.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form Data:', data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      <div
        className="p-8 rounded-lg shadow-lg w-full max-w-md relative z-10"
        style={{ background: 'rgba(255, 255, 255, 0.95)' }}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <div className="relative group">
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="peer w-full mt-1 px-4 py-2 rounded-md bg-white relative z-10 focus:outline-none"
                />
                <div className="absolute inset-0 rounded-md pointer-events-none opacity-0 peer-focus:opacity-100 animate-borderMove bg-[length:40px_40px] z-0" />
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 rounded-md transition-colors"
            style={{ backgroundColor: 'black', color: '#FFEB9A' }}
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Tailwind Custom Styles */}
      <style>
        {`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @layer utilities {
          @keyframes borderMove {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 40px 40px;
            }
          }

          .animate-borderMove {
            background-image: linear-gradient(
              45deg,
              #FFEB9A 25%,
              black 25%,
              black 50%,
              #FFEB9A 50%,
              #FFEB9A 75%,
              black 75%
            );
            animation: borderMove 1.5s linear infinite;
            border-radius: 0.375rem; /* Tailwind's rounded-md */
          }
        }
        `}
      </style>
    </div>
  );
};

export default SignUpForm;
