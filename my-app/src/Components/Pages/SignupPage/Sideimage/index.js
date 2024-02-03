import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"
import StudentwithIpad from "../StudentwithIpad.jpeg";

export function Sideimage() {
    return (
        <Container className="w-75 p-3" >
            <div className="d-flex align-items-center mx-auto p-3">
                <div className="flex-shrink-0">
                    <Image src={StudentwithIpad} alt="wallpaper" height={650} className="shadow p-3 mb-5 bg-body rounded"/>   
                </div>
            </div>
            
        </Container>
    );
};