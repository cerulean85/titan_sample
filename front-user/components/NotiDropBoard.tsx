"use client";

import { useRef, useEffect } from "react";

interface NotiDropBoardProps {
    visible: boolean;
    onClose: () => void;
}

export default function NotiDropBoard({ visible, onClose }: NotiDropBoardProps) {
    const menuRef = useRef<HTMLDivElement>(null);

    // 바깥 클릭 시 메뉴 닫기
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="position-fixed top-0 end-0 p-3" ref={menuRef}>
            {/* 드롭다운 메뉴 */}
            {visible && (
                <div className="dropdown-menu show position-absolute end-0 mt-2">
                    <a className="dropdown-item" href="#">메뉴 1</a>
                    <a className="dropdown-item" href="#">메뉴 2</a>
                    <a className="dropdown-item" href="#">메뉴 3</a>
                </div>
            )}
        </div>
    );
}
