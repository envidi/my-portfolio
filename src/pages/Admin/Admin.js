import MainAdmin from "./MainAdmin"
import SidebarAdmin from "./SideBarAdmin"


import classNames from "classnames/bind";
import style from "./Admin.module.scss"

const cx = classNames.bind(style)

const Admin = (component,data)=>{
    return `
    <div class=${cx("container")}>
        ${SidebarAdmin()}
        ${MainAdmin(component,data)}
    </div>
    `
}
export default Admin


















