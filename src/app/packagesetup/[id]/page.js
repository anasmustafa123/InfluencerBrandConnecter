import React from "react";
import PackageSetup from "./PageSetup";

export default async function Page({ params }) {
    const { id } = await params;
    return (<PackageSetup pkg_id = {id}/>);
}