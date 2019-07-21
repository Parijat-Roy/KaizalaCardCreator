module.exports.style = `<style> :root {
    --main-bg-color: #0078d4;
}

.page {
    background-color: #ecf2f6;
    /* background-image: url(page_background_image.jpg); */
}

html {
    height: 100%;
}

body {
    margin: 0;
}

* {
    font-family: sans-serif;
}

input[type="checkbox"] {
    display: none;
}

select {
    height: 52px;
    padding: 5px;
    padding-right: 40px;
    background-color: #ececec;
    border: 0;
    outline: none;
    width: 100%;
    background: url(dropdown.png) 95% 50% no-repeat;
    -webkit-appearance: none;
}

textarea:focus,
select option {
    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid var(--main-bg-color);
    outline: 0;
}

input[type="text"]:focus {
    outline: none;
    border: 1px solid var(--main-bg-color);
}

input[type="number"]:focus {
    outline: none;
    border: 1px solid var(--main-bg-color);
}

img {
    max-width: 100%;
}

div.disabled {
    pointer-events: none;
    color: #c0c0c0;
}

div.enabled {
    pointer-events: auto;
    color: var(--main-bg-color);
}

.section-div {
    display: flex;
    flex-direction: column;
}

.section-div-summary {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    margin: 10px;
    padding: 5px;
    margin-bottom: 0px;
    margin-top: 5px;
    border-radius: 3px;
}

.body-container {
    margin-top: 56px;
    padding-bottom: 106px;
    display: grid;
}

.field-label {
    padding: 15px 15px 0px 15px;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #32495f;
}

.field-label-summary {
    padding: 3px 15px 0px 15px;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #667787;
}

.answer-label {
    padding: 9px 7px 0px 14px;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #32495f;
}

.image_right_date {
    background: URL("date.png");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 20px;
}

.image_right_time {
    background: URL("time.png");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 20px;
}

.image_right_location {
    background: URL("side1.png");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 20px;
}

.textbox-1 {
    width: auto;
    margin: 5px 15px 10px 15px;
    border: 1px solid #e0e3e7;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.19);
    background-color: #ffffff;
    outline: 0;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #32495f;
    height: 20px;
    -webkit-appearance: none;
}

.option-div {
    margin-left: 10px;
    margin-top: 5px;
}

.error {
    padding-left: 15px;
    font-size: 10pt;
    color: #ff0000;
    display: none;
}

.selected-label {
    width: 100%;
    background-color: var(--main-bg-color);
    color: #ffffff;
}

.unselected-label {
    width: 100%;
    background-color: #ffffff;
    color: #32495f;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
}

.single-select-rounded {
    display: flex;
    align-items: center;
    padding: 4px;
    float: left;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    height: 52px;
    text-align: center;
}

.single-select-rounded label {
    padding: 16px 15px;
    border-radius: 4px;
    box-shadow: 0 0px 2px 0 rgba(0, 0, 0, 0.19);
    min-width: 92px;
    text-align: center;
}

.single-select-rectangle {
    display: flex;
    align-items: center;
    padding: 4px;
    float: left;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
}

.single-select-rectangle label {
    padding: 17px 13px;
    border-radius: 4px;
    box-shadow: 0 0px 2px 0 rgba(0, 0, 0, 0.19);
    min-width: 40px;
    text-align: center;
}

.attachment-div {
    position: relative;
}

.scroll-div {
    overflow-x: auto;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    margin-top: 5px;
}

.horizontal-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

[contenteditable=true]:empty:before {
    content: attr(placeholder);
    color: #98a3af;
    display: block;
}

.section-selected-img {
    width: 72px;
    height: 72px;
    object-fit: cover;
    overflow: hidden;
    box-shadow: 2pt 1pt 4pt 0pt rgba(0, 0, 0, 0.4);
    border-radius: 4pt;
}

.section-img {
    width: 20px;
    height: 20px;
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.19);
    border: 1px solid #e0e3e7;
    padding: 22px;
    background-color: #fff;
    content: url(AttachmentIcon.png);
}

.cancel-img {
    position: absolute;
    width: 14px;
    height: 14px;
    right: 1px;
    top: 2px;
    content: url("CancelIcon.png");
}

.text-area {
    word-break: break-word;
    width: auto;
    min-height: 100px;
    border: 1px solid #e0e3e7;
    margin-left: 17px;
    margin-right: 17px;
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 5px;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.19);
    background-color: #ffffff;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #32495f;
    -webkit-appearance: none;
}

.txt-data {
    word-break: break-word;
    user-select: text;
    width: auto;
    border: 1px solid #e0e3e7;
    margin-left: 15px;
    margin-right: 15px;
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 5px;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #32495f;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.19);
    background-color: #ffffff;
    -webkit-appearance: none;
}

.txt-data:focus {
    border: 1px solid var(--main-bg-color);
}

.header {
    position: fixed;
    display: block;
    width: 100%;
    top: 0px;
    overflow: hidden;
    z-index: 1;
    height: 56px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.19);
}

.header-background {
    background-color: #ffffff;
}

.back-button {
    float: left;
    margin-top: 16px;
    margin-left: 10px;
    width: 36px;
}

.icon-image {
    float: left;
    margin-top: 12px;
    margin-bottom: 8px;
}

.header-label {
    font-size: 17px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    float: left;
    color: #32495f;
    margin-left: 8px;
    margin-top: 19px;
}

.back-icon {
    width: 72%;
    margin-left: 5px;
    content: url(back.png);
}

.send-label {
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #0078d4;
    float: right;
    margin-right: 12px;
    margin-top: 21px;
}

.app-icon {
    width: 32px;
    height: 32px;
    object-fit: contain;
    content: url(AppIcon.png);
}

.img-div {
    position: relative;
    margin-right: 8pt;
    margin-top: 5pt;
    margin-bottom: 5pt;
    margin-left: 1pt;
}

.doc-video-audio-type {
    color: #98a3af;
    font-size: 12px;
    letter-spacing: 2;
}

.doc-video-audio-name {
    color: var(--main-bg-color);
    font-size: 14px;
    padding-top: 4px;
    padding-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.doc-video-audio-size {
    color: #6f7e8f;
    font-size: 12px;
    margin-right: 2px;
}

.document-icon {
    height: 12px;
    width: 12px;
}

.summary-body {
    padding-top: 60px;
    background-color: #c0c0c0;
}

.subsection {
    margin-bottom: 16pt;
    display: flex;
    flex-direction: column;
}

.details .heading {
    font-size: 16pt;
    color: #000000;
}

.subsection span.value {
    font-weight: bold;
    color: #333333;
}

.subsection p {
    font-weight: normal;
    color: #7f7f7f;
    margin: 0pt;
}

.images img {
    width: 80px;
    margin: 6px;
    border-radius: 12px;
    height: 80px;
    object-fit: cover;
    border: 0.7px solid black;
}

.video {
    height: 40px !important;
    width: 40px !important;
    padding: 20px;
}

.timeline-item {
    margin: 16pt 0pt;
}

.timeline-item .title {
    font-size: 12pt;
    color: #7f7f7f;
    margin-bottom: 8pt;
}

.footer {
    position: fixed;
    bottom: 0;
    width: 95%;
    padding-top: 31.5pt;
    padding-bottom: 15pt;
    padding-left: 5%;
    padding-right: 5%;
    overflow: hidden;
    background-image: url("footer_bg.png");
    background-size: contain;
}

.footer-action {
    margin-bottom: 0pt;
    height: 44px;
    width: 30%;
    color: rgb(0, 111, 241);
    background-color: white;
    border-radius: 0;
    font-size: 12pt;
    font-weight: normal;
    float: left;
    -webkit-appearance: none;
    border: 0.5px solid;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

.progress {
    display: "flex";
    align-items: "center";
}

.footer-action:disabled {
    color: #6f7e8f;
}

.footer-action-previous {
    margin-bottom: 0pt;
    height: 46px;
    width: 30%;
    color: rgb(0, 111, 241);
    font-size: 12pt;
    font-weight: normal;
    float: left;
    -webkit-appearance: none;
    background-image: url(previous.png);
    background-position: center;
    background-size: 11px;
    background-repeat: no-repeat;
    border-radius: 22px;
    border: solid 1px #0078d7;
    background-color: #ffffff;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: none;
}

.footer-action-previous:disabled {
    background-image: url("previous_disabled.png");
    opacity: .5;
}

.footer-action-previous:focus {
    outline: none;
}

.footer-action-next:disabled {
    background-image: url("next_disabled.png");
    opacity: .5;
}

.footer-action-next {
    margin-bottom: 0pt;
    height: 46px;
    width: 30%;
    color: rgb(0, 111, 241);
    font-size: 12pt;
    font-weight: normal;
    float: left;
    -webkit-appearance: none;
    border: none;
    background-image: url(next.png);
    background-position: center;
    background-size: 11px;
    background-repeat: no-repeat;
    background-color: var(--main-bg-color);
    border-radius: 22px;
    box-shadow: 0 2px 4px 0 rgba(0, 161, 255, 0.35);
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

.footer-action-next:focus {
    outline: none;
}

.footer-action-submit {
    width: 30%;
    text-align: center;
    font-size: 13pt;
    font-weight: 500;
    float: left;
    border: none;
    background-color: var(--main-bg-color);
    border-radius: 22px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 46px;
    line-height: 46px;
}

.footer-action-send {
    margin-bottom: 0pt;
    height: 33pt;
    width: 30%;
    color: white;
    background-color: #5ad7a4;
    border-radius: 2px;
    font-size: 12pt;
    font-weight: normal;
    border: none;
    font-weight: 600;
    float: left;
    -webkit-appearance: none;
}

.progress-text {
    width: 100%;
    text-align: center;
    padding-bottom: 3pt;
    font-size: 11pt;
    color: black;
    font-weight: 500;
}

.progressbar-inner-div {
    /* width: + (_currentPage * 100 / TOTAL_PAGE) + %; */
    height: 100%;
    background-color: rgb(253, 158, 40);
}

.progressbar-outer-div {
    width: 80%;
    height: 2pt;
    background-color: rgba(152, 163, 175, .25);
    margin-left: 10%;
    margin-bottom: 20px;
}

.progress-inner-div {
    width: 100%;
    margin-top: 9px;
}

.hide-page {
    display: none;
}

.show-page {
    display: block;
}

.section-label {
    background: rgba(0, 120, 212, 0.15);
    padding: 10px;
    color: var(--main-bg-color);
    font-weight: 520;
    margin-top: 1px;
    margin-bottom: 1px;
    font-size: 14px;
    letter-spacing: 2.4px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 32px;
    float: right;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: var(--main-bg-color);
}

input:checked+.slider:before {
    transform: translateX(27px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

.slider-div {
    display: inline-block;
    width: 94%;
    margin: 10px;
}

.slider-label {
    padding: 6px 0px 6px 4px;
    font-size: 15px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #32495f;
    width: 60%;
    float: left;
}

.star-rating-container {
    padding-bottom: 11px;
    padding-top: 11px;
}

.star-rating-container img {
    width: 48px;
    height: auto;
    margin: 8px;
}

.star-on {
    content: url("star-on.png");
}

.star-off {
    content: url("star-off.png");
}

.feedback-label {
    height: auto;
    font-size: 16px;
    font-family: sans-serif;
    font-weight: bold;
    display: none;
}

.slidecontainer {
    width: 100%;
}

.slider-bar::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background: var(--main-bg-color);
    border-radius: 50%;
}

.slider-textbox {
    width: 20%;
    height: 46px;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.19);
    border-style: solid;
    border-width: 0.5px;
    border-image-source: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4) 5%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0));
    margin-top: -4px;
    float: right;
    margin-right: 10px;
    padding: 2px;
    margin-bottom: 15px;
    text-align: center;
}

.slider-with-textbox {
    display: inline-block;
    width: 96%;
    overflow-x: hidden;
}

.slider-bar {
    -webkit-appearance: none;
    width: 68%;
    height: 2px;
    background: var(--main-bg-color);
    outline: none;
    -webkit-transition: .2s;
    transition: opacity .2s;
    position: inherit;
    float: left;
    margin: 20px 0px 0px 15px;
    border-radius: 20px;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: var(--main-bg-color);
    cursor: pointer;
}

.feedback-slider-options {
    font-size: 16px;
    text-align: center;
}

.feedbackSlderTable {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
}

input[type="date"]:before {
    content: attr(placeholder) !important;
    color: #aaa;
}

input[type="date"]:focus:before,
input[type="date"]:valid:before {
    content: none;
}

input[type="time"]:before {
    content: attr(placeholder) !important;
    color: #aaa;
}

input[type="time"]:focus:before,
input[type="time"]:valid:before {
    content: none;
}

.icon-inside-textbox {
    margin: 8px 2px 12px 18px;
    padding: 16px;
    position: absolute;
    height: 16px;
    background-image: url(AppIcon.png);
    background-size: 25px;
    background-repeat: no-repeat;
    background-position: center;
    padding-left: 25px;
}

.leftpad {
    padding-left: 50px;
}

.location-address {
    font-size: 12pt;
    font-weight: normal;
    color: #32495f;
    float: left;
}

.location-title {
    padding: 0px 15px;
    padding-bottom: 5pt;
    font-size: 9pt;
    font-weight: normal;
    color: #32495f;
}

.location-image {
    padding: 15px;
    padding-top: 10px;
    padding-bottom: 0pt;
    height: auto;
    max-height: 200pt;
    object-fit: contain;
    width: calc(100% - 30pt);
}

.location-div1 {
    float: left;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.location-div2 {
    float: right;
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: flex-end;
    margin-left: 4pt;
    min-width: 50pt;
}

.refresh-location-text {
    font-size: 9px;
    color: var(--main-bg-color);
    font-weight: bold;
    display: block;
}   
</style>`;