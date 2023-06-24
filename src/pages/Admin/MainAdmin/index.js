
import classNames from "classnames/bind";
import styles from "./MainAdmin.module.scss";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";

const cx = classNames.bind(styles);


const ComponentCase = (component,data = [])=>{
    switch (component) {
        case "add":
            
            return Add()
            
        case "list":
            
            return List()
            
        case "edit":
            return Edit(data)
            
            
                    
    
        default:
            return List()
            
    }
}

const MainAdmin = (component = "list",data=[])=>{
    
    return `<div class=${cx('container')}>
        ${ComponentCase(component,data)}
    </div>`
}
export default MainAdmin