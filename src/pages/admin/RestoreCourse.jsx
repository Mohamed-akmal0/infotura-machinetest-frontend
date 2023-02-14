import React from "react";
import { DeletedCourse } from "../../components/admin/DeletedCourse";
import { Navbar } from "../../components/admin/Navbar";

export const RestoreCourse = () => {
    return(
        <>
            <Navbar />
            <DeletedCourse />
        </>
    )
}