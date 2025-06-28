// FloatingElements.js
import React from 'react';
import { motion } from 'framer-motion';
import { floatingAnimation } from '../utils/animations';

const FloatingElements = () => {
    const styles = {
        container: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 1
        },
        element1: {
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: 'clamp(40px, 10vw, 60px)',
            height: 'clamp(40px, 10vw, 60px)',
            background: '#4CAF50',
            borderRadius: '50%',
            opacity: 0.1
        },
        element2: {
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: 'clamp(30px, 8vw, 40px)',
            height: 'clamp(30px, 8vw, 40px)',
            background: '#2196F3',
            borderRadius: '50%',
            opacity: 0.1
        },
        element3: {
            position: 'absolute',
            bottom: '15%',
            left: '20%',
            width: 'clamp(35px, 9vw, 50px)',
            height: 'clamp(35px, 9vw, 50px)',
            background: '#667eea',
            borderRadius: '50%',
            opacity: 0.1
        }
    };

    return (
        <div style={styles.container}>
            <motion.div
                style={styles.element1}
                animate={floatingAnimation}
            />
            <motion.div
                style={styles.element2}
                animate={{
                    ...floatingAnimation,
                    transition: {
                        ...floatingAnimation.transition,
                        delay: 1
                    }
                }}
            />
            <motion.div
                style={styles.element3}
                animate={{
                    ...floatingAnimation,
                    transition: {
                        ...floatingAnimation.transition,
                        delay: 2
                    }
                }}
            />
        </div>
    );
};

export default FloatingElements;