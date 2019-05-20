	/**
	 * checking password function 
	 */
	function checkPassword(){
		var password = $("#UserPassword").val();
		console.log('')
		var num = password.search(/[0-9]/g);
		var eng  = password.search(/[a-z]/ig);
		var spe = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
		var kore =  /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
		if(kore.test(password)){
			alert("한글은 사용이 불가능 합니다. \n영문,숫자, 특수문자만 아이디만 사용이 가능합니다.");
			$("#UserPassword").focus();
			return false;
		}
		if(password.search( /\s/g) !== -1){
			alert("password do not use space.");
			$("#UserPassword").focus();
			return false;
		}
		return true;
	}
	/**
	 * send before check need 
	*/
	function sendRegIt(){
			const regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			const regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
			const regNickname = /^[a-zA-Z0-9]+$/;
			//user email null check
			if(IsEmpty($("#UserEmail").val())){
				alert("put in email.");
				return false;
			}
			//user nick name null check
			if(IsEmpty($("#UsernickName").val())){
				alert("put in nick name.");
				return false;
			}
			//user password null check
			if(IsEmpty($("#UserPassword").val()))
			{
				alert("put in password.");
				return false;
			}
			//user password comfirm null check
			if(IsEmpty($("#UserComfirmPassword").val())){
				alert("put in compare password.");
				return false;
			}
			//user nick name space check
			if($("#UsernickName").val().indexOf(" ") >= 0){
				alert("you can't use space in nick name.");
				return false;
			}
			/**
			*  nick name check you can use (alphabet lower case, number only)
			*/
			if(!regNickname.test($("#UsernickName").val())){
				alert("nick name only use lower case, Upper case,  number.");
				$("UsernickName").val("");
				$("#UsernickName").focus();
				return false;
			}
			//nick name length check
			if($("#UsernickName").val().length < 4 || $("#UsernickName").val().length > 12){
				alert("nick name 최소 5자 이상 12자 미만으로 입력하시오.");
				$("#UsernickName").focus();
				$("#UsernickName").select();
				return false;
			}
			//password match comfirm password check
			if($("#UserPassword").val() != $("#UserComfirmPassword").val()){
				alert("not match password and comfirm password.");
				$("#UserComfirmPassword").val("");
				$("#UserComfirmPassword").focus();
				return false;
			}
			//nick name and password do not match check
			if($("#UsernickName").val() === $("#UserPassword").val()){
				alert("nickname 과 password가 일치합니다.")
				$("#UserPassword").val("");
				$("#UserComfirmPassword").val("");
				$("#UserPassword").focus();
				return false;
			}
			//email check
			if(!regExp.test($("#UserEmail").val())){
				alert("wrong email address.");
				$("#UserEmail").focus();
				$("#UserEmail").select();
				return false;
			}
			//password check
			let checkingpw = checkPassword();
			console.log('chekcing password ::: '+checkingpw);
			if(checkingpw){
				console.log("check password success");
				return true;
			}else{
				console.log("check password function :: ");
				return false;
			}
			console.log("testing end")
			return true;
	}
	//real do