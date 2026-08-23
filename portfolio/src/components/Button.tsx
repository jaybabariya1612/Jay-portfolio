import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    children, 
    icon, 
    iconPosition = 'right',
    href,
    className = '',
    ...props 
  }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-display font-semibold transition-all duration-300 rounded-full relative overflow-hidden group";
    
    const variants = {
      primary: "bg-gradient-to-r from-[#D97706] to-[#B45309] text-white hover:shadow-lg hover:shadow-[#D97706]/30 hover:-translate-y-0.5",
      secondary: "bg-[#1C1917] text-white hover:bg-[#44403C] hover:-translate-y-0.5",
      outline: "border-2 border-[#D6D3D1] text-[#1C1917] hover:border-[#D97706] hover:text-[#D97706] hover:-translate-y-0.5 bg-transparent",
      ghost: "text-[#1C1917] hover:text-[#D97706] hover:bg-[#D97706]/10",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...(props as any)}
        >
          {icon && iconPosition === 'left' && (
            <span className="group-hover:rotate-12 transition-transform duration-300">{icon}</span>
          )}
          <span>{children}</span>
          {icon && iconPosition === 'right' && (
            <span className="group-hover:translate-x-1 transition-transform duration-300">{icon}</span>
          )}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className="group-hover:rotate-12 transition-transform duration-300">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="group-hover:translate-x-1 transition-transform duration-300">{icon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
