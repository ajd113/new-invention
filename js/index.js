var buttons = document.querySelectorAll(".radmenu a");

for (var i=0, l=buttons.length; i<l; i++) {
	var button = buttons[i];
	button.onclick = setSelected;
}

function setSelected() {
	//这里加上"use strict"会产生更多错误，所以没有加
	
	if (this.classList.contains("selected")) {
		this.classList.remove("selected");
      
	if (!this.parentNode.classList.contains("radmenu")) {
        this.parentNode.parentNode.parentNode.querySelector("a").classList.add("selected");
      } 
		else {
        this.classList.add("show");
      }
    } 
		else {
        this.classList.add("selected");
        this.windows.open();//让子菜单链接到子网页
    }
	return false;
}
