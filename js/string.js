String.prototype.startWith=function(s){
  if(s==null||s==""||this.length==0||s.length>this.length)
   return false;
  if(this.substr(0,s.length)==s)
	 return true;
  else
	 return false;
  return true;
};
String.prototype.endWith=function(s){    
	if(s==null||s==""||this.length==0||s.length>this.length)
		return false;
	if(this.substring(this.length-s.length)==s)
		return true;
	else
		return false;
  return true;    
};
String.prototype.replaceAll  = function(s1,s2){
	return this.replace(new RegExp(s1,"gm"),s2);
}	