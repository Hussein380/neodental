"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

interface SlideInProps extends AnimationProps {
  direction?: "left" | "right" | "up" | "down";
  distance?: number;
}

interface StaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

/**
 * FadeIn — Smooth opacity reveal on scroll
 */
export const FadeIn: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

/**
 * SlideUp — Elevation slide up with easing
 */
export const SlideUp: React.FC<AnimationProps & { distance?: number }> = ({
  children,
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = "",
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: distance }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.div>
);

/**
 * SlideIn — Directional horizontal/vertical slide
 */
export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.7,
  distance = 50,
  className = "",
}) => {
  const initialOffset = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScaleIn — Growth with spring bounce
 */
export const ScaleIn: React.FC<AnimationProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.88 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration, delay, ease: [0.34, 1.56, 0.64, 1] }}
  >
    {children}
  </motion.div>
);

/**
 * StaggerContainer & StaggerItem — Cascading grid reveals
 */
export const StaggerContainer: React.FC<StaggerProps> = ({
  children,
  staggerDelay = 0.1,
  className = "",
}) => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <motion.div className={className} variants={itemVariants}>
    {children}
  </motion.div>
);
