"use client";
import { use, useReducer, useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

export default function DraggableComponent({ children, state, setState }) {
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [dragging, setDragging] = useState(false);
    const offset = useRef({x: 0, y: 0});

    const onMouseDown = (e) => {
        setDragging(true);
        offset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
        };
    };
    const onMouseMove = (e) => {
        if (!dragging) return;
        setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
        });
    };
    const onMouseUp = () => setDragging(false);

    return (
        <>
        {
            state 
            ? 
            (<div
                className={` inset-0 ${dragging ? "fixed" : ""}`}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseDown={onMouseDown}
            >
            <div
                className="absolute bg-white shadow-xl rounded-2xl p-4 w-3xl"
                style={{ left: position.x, top: position.y }}
            >
                {children}
                <div className="absolute top-3 right-3 cursor-pointer text-2xl hover:cursor-pointer" 
                onClick={
                    () => {
                        setDragging(false)
                        setState(false)
                    }
                }>
                    <AiFillCloseCircle />
                </div>
            </div>
            </div>) 
            :
            (<></>)
        }
        </>
        
       
    );
}