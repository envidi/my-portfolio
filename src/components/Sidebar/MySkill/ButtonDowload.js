import classNames from "classnames/bind";
import styles from "./btndowload.module.scss";
import { useEffect,useState,myLanguage,myTechnology,anotherSkill } from "../../../utilities/index.js";

const cx = classNames.bind(styles);

function ButtonDowload(){
    useEffect(()=>{
        const linkPDF = "https://work247.vn/download-cvpdf/cv.php?idcv=543&iduser=318542&view=1&cvname=CV%20Y%20t%E1%BA%BF%20d%C6%B0%E1%BB%A3c%2007"
        function downloadFile() {
            var cvFilePath = './nguyen-van-duc-work247.pdf';

      // Tạo một đường link ẩn và thực hiện click để tải tệp
      var link = document.getElementById('downloadLink');
      link.href = cvFilePath;
      link.download = 'nguyen-van-duc-work247.pdf';
      link.click();
        };
        const dowloadBtn = document.querySelector(`.${cx('contain-cv')}`)
        console.log(dowloadBtn)
        dowloadBtn.addEventListener("click",()=>{
            console.log(1)
            downloadFile()
        })
    })
    return `
    <div  class=${cx('contain-cv')}>
    <div id="testBtn" class=${cx('cv')}>
        DOWNLOAD CV <i class="fa-solid fa-download"></i>
        <a id="downloadLink" dowload href="nguyen-van-duc-work247.pdf">dowload</a>
    </div>
            
</div>
    `
}
export default ButtonDowload