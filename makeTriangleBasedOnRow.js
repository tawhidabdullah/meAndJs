const space = function (spc) {
	if(spc === 0) {
		return "";}
		return " " +space (spc-1);
	};
	const star = function (str){
		if (str === 0) {
			return "";}
			return "*" + star(str-1);
		};



		const makeStarts = function (n,spc,str) {
			if(n===0) {
				return 'get a life or give a valid number to make stars';
        }
				console.log(space(spc)+star(str))
			makeStarts(n-1,spc-1,str+2);
		}

    
		const maketrianglestarsBasedonrow = function(n)
		{
			makeStarts(n,n-1,1)
		};

		maketrianglestarsBasedonrow(0);