
//使用Ajax技术获取数据；
//使用response接受并返回，然后传递给下一个；
//使用json接受后赋值给products并调用initialize函数；
fetch('products.json').then(function (response) {
	return response.json();
}).then(function (json) {
	let products = json;
	initialize(products);
})

function initialize(products) {
	//获取需要操作的元素
	const main = document.querySelector('main');
	const choose = document.querySelector('#choose');
	const search = document.querySelector('#search');
	const searchbtn = document.querySelector('#searchbtn');
	
	let lastCategory = choose.value;
	
	//用户存放食品类型和搜索词
	let categoryGroup;
	let finalGroup;
	
	//将全部的产品赋值给categoryGroup，用于初始化
	finalGroup = products;
	updisplay();
	
	//页面展示数据后将其清空，为后续作准备
	categoryGroup = [];
	finalGroup = [];
	
	//给按钮设置点击事件
	searchbtn.onclick = selectSearch;
	
	function  selectSearch(e) {
		//停止默认提交
		e.preventDefault();
		
		//清空之前的搜索
		categoryGroup = [];
		finalGroup = [];
		
		//获取用户操作后的数据
		lastCategory = choose.value;
		
		//如果用户没有输入，则执行默认操作，显示全部信息
		if(lastCategory === '全部' && search.value === ''){
			finalGroup = products;
			updisplay();
		}else {
			//如果用户输入的内容等于products[i].type，则将与之匹配的数据追加到categoryGroup
			for(let i = 0; i < products.length; i ++){
				//如果用户只选择种类，没有输入内容
				if(lastCategory === products[i].type && search.value == '') {
					categoryGroup.push(products[i]);
				}
				//如果用户即选择了种类，又输入类容
				if(lastCategory === products[i].type && search.value === products[i].name) {
					categoryGroup.push(products[i]);
				}
			}
			//过滤完成后执行selectProducts()
			selectProducts();
		}
		
		
	}
	
	//selectProducts()方法获取selectSearch()方法选中的产品组
	function selectProducts() {
		for(let i = 0; i < categoryGroup.length; i ++){
				finalGroup.push(categoryGroup[i]);
		}
		updisplay();
	}
	function updisplay() {
		//移除main里所有元素
		while(main.firstChild){
			main.removeChild(main.firstChild);
		}
		if(finalGroup.length === 0) {
			const para = document.createElement('div');
			para.textContent = '数据异常！';
			para.style.textAlign = 'center';
			para.style.width = '100%';
			para.style.fontSize = '3rem';
			para.style.color = '#F2F2F2';
			main.appendChild(para);
		}else {
			//遍历数组finalGroup
			for (let i = 0; i < finalGroup.length; i++) {
				fetchBlod(finalGroup[i]);
			}
		}
	}
	
	function fetchBlod(products) {
		let url = 'images/' + products.image;
		fetch(url).then(function (response) {
			return response.blob();
		}).then(function (blob) {
			let objtUrl = URL.createObjectURL(blob);
			showProduct(objtUrl,products)
		})
	}
	
	function showProduct(objtUrl,products) {
		//创建<section>，<h2>，<p>和<img>元素
		const section = document.createElement('section');
		const h2 = document.createElement('h2');
		const pre = document.createElement('p');
		const img = document.createElement('img');
		const button = document.createElement('button');
		
		//设置卡片信息
		section.setAttribute('class','car');
		h2.textContent = products.name;
		pre.textContent = products.price + ' ' + '元';
		img.src = 'images/' + products.image;
		img.alt = products.name;
		button.style.width = '100%';
		button.textContent = '购买';
		
		//添加到main元素里
		main.appendChild(section);
		
		section.appendChild(img);
		section.appendChild(h2);
		section.appendChild(pre);
		section.appendChild(button);
		
		
		
		
	}
}


