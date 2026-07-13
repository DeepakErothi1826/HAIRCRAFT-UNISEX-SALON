import { motion } from 'framer-motion';

export default function FloatingDot({ size = 8, color = 'bg-rose', top, left, right, bottom, delay = 0, duration = 5 }) {
  return (
    <motion.div
      className={`absolute rounded-full ${color} pointer-events-none`}
      style={{ width: size, height: size, top, left, right, bottom }}
      animate={{
        y: [0, -18, -6, -22, 0],
        x: [0, 8, -4, 10, 0],
        opacity: [0.4, 0.7, 0.5, 0.8, 0.4],
      }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}
