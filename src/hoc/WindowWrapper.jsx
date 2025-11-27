import useWindowStore from "#store/window.js";
import {useEffect, useLayoutEffect, useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";



    const WindowWrapper = (Component, windowKey) => {
        const Wrapped = (props) => {
            const {focusWindow, windows} = useWindowStore();
            const {isOpen, zIndex} = windows[windowKey];
            const ref = useRef(null);

            useGSAP(() => {
                const el = ref.current;
                if(!el || !open) return;

                el.style.display = "block";

                gsap.fromTo(el, {opacity:0 , y:40,scale:0.6} , {opacity:1,scale:1,ease:"power3.out",duration:0.6},)

            },[isOpen]);

            useGSAP(() => {
                const el = ref.current;
                if(!el || !isOpen) return;
                const [instance] = Draggable.create(el,{onPress:() => focusWindow(windowKey),});

                return () => instance.kill();
            },[isOpen]);



            useLayoutEffect(() => {
                const el = ref.current;
                if(!el) return;
                el.style.display = isOpen ? "block" : "none";
            }, [isOpen]);



            return (
                <section id={windowKey} ref={ref} style={{zIndex}
                } className="absolute">
                    <Component {...props} />
                </section>
            );
        };
        Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"}`;

        return Wrapped;
    }

export default WindowWrapper;