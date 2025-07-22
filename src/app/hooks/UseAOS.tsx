import { useEffect } from 'react';

export const useAOS = (duration: number = 1500) => {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({ duration });
        });
    }, [duration]);
};

