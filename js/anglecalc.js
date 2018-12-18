//mite.ga All Rights Reserved
function calcs()
{
	var sa = document.righttriangle.lengthX.value;
	var sb = document.righttriangle.lengthY.value;
	var sc = document.righttriangle.lengthZ.value;
	var aa = document.righttriangle.lengthA.value;
	var ab = document.righttriangle.lengthB.value;

	$flag = 0;
	if (sa != "") $flag++;
	if (sb != "") $flag++;
	if (aa != "") $flag++;
	if (ab != "") $flag++;
	if ($flag != 2) return;
	
	if (sa != "") righttriangleblur(1);
	else if (sb != "") righttriangleblur(2);
	else if (sc != "") righttriangleblur(3);
	else if (aa != "") righttriangleblur(4);
	else if (ab != "") righttriangleblur(5);
}
function isNum(args)
{
	args = args.toString();

	if (args.length == 0)
	return false;

	for (var i = 0;  i<args.length;  i++)
	{
		if ((args.substring(i,i+1) < "0" || args.substring(i, i+1) > "9") && args.substring(i, i+1) != "." && args.substring(i, i+1) != "-")
		{
			return false;
		}
	}

	return true;
}
function clearrighttriangle()
{
	document.righttriangle.lengthX.value="";
	document.righttriangle.lengthY.value="";
	document.righttriangle.lengthZ.value="";
	document.righttriangle.lengthA.value="";
	document.righttriangle.lengthB.value="";
	document.righttriangle.area.value="";
	document.righttriangle.perimeter.value="";
	document.righttriangle.ccr.value="";
	document.righttriangle.icr.value="";
}

function righttrianglecal(p)
{
	var sa = document.righttriangle.lengthX.value;
	var sb = document.righttriangle.lengthY.value;
	var sc = document.righttriangle.lengthZ.value;
	var aa = document.righttriangle.lengthA.value;
	var ab = document.righttriangle.lengthB.value;
	
	if (p == "1" && !isNum(sa))
	{
		  sa = sa.substring(0,sa.length-1);
		  document.righttriangle.lengthX.value = sa;
		  return;	   
	}
	else if (p == "2" && !isNum(sb))
	{
		  sb = sb.substring(0,sb.length-1);
		  document.righttriangle.lengthY.value = sb;
		  return;	   
	}
	else if (p == "3" && !isNum(sc))
	{
		  sc = sc.substring(0,sc.length-1);
		  document.righttriangle.lengthZ.value = sb;
		  return;	   
	}
	else if (p == "4")
    {
		if (!isNum(aa) || aa > 90)
		{
			  //!!!("bbb");
			  aa = aa.substring(0,aa.length-1);
			  document.righttriangle.lengthA.value = aa;
			  return;
        }			  
	}
	else if (p == "5")
	{
		if (!isNum(ab) || ab > 90)
		{
			  ab = ab.substring(0,ab.length-1);
			  document.righttriangle.lengthB.value = ab;
			  return;	  
		}		  
	}
}

function righttriangleblur(p)
{
    //!!!(p);
	
	var sa = document.righttriangle.lengthX.value;
	var sb = document.righttriangle.lengthY.value;
	var sc = document.righttriangle.lengthZ.value;
	var aa = document.righttriangle.lengthA.value;
	var ab = document.righttriangle.lengthB.value;
	
	var flag=0;
	if (isNum(sa))
	{ flag++; sa = sa * 1;}
	if (isNum(sb)) 
	{flag++; sb = sb * 1;}
	if (isNum(sc)) 
	{flag++; sc = sc * 1;}
	if (isNum(aa)) 
	{flag++; aa = aa * 1;}
	if (isNum(ab)) 
	{flag++;ab = ab * 1;}
	
	if (flag < 2) return;
	
	var ar = 0;
	var peri = 0;
	var cr = 0;
	var ir = 0;
	
	//!!!("good");
	
	if (p == "1")
	{
	    //!!!("1");
	    if (isNum(sb))
		{
		     sc = Math.sqrt(sa * sa + sb * sb);
			 aa = Math.asin(sa/sc) * 180 / Math.PI;
			 ab = Math.asin(sb/sc) * 180 / Math.PI;
		}
		else if (isNum(sc))
		{
		     sb = Math.sqrt(sc * sc - sa * sa);
			 aa = Math.asin(sa/sc) * 180 / Math.PI;
			 ab = Math.asin(sb/sc) * 180 / Math.PI;
		}
		else if (isNum(aa))
		{
			 ab = 90 - aa;
		     var BB = ab * Math.PI/180;
			 var AA = aa * Math.PI/180;

             sb = sa * Math.sin(BB)/Math.sin(AA);		
			 sc = Math.sqrt(sa * sa + sb * sb);
		}
		else if (isNum(ab))
		{
			 aa = 90 - ab;
		     var BB = ab * Math.PI/180;
			 var AA = aa * Math.PI/180;

             sb = sa * Math.sin(BB)/Math.sin(AA);		
			 sc = Math.sqrt(sa * sa + sb * sb);
		}
        else return;				
	}
	else if (p == "2")
	{
	    //!!!("1");
	    if (isNum(sa))
		{
		     sc = Math.sqrt(sa * sa + sb * sb);
			 aa = Math.asin(sa/sc) * 180 / Math.PI;
			 ab = Math.asin(sb/sc) * 180 / Math.PI;
		}
		else if (isNum(sc))
		{
		     //sb = Math.sqrt(sc * sc - sa * sa);
		     sa = Math.sqrt(sc * sc - sb * sb);
			 aa = Math.asin(sa/sc) * 180 / Math.PI;
			 ab = Math.asin(sb/sc) * 180 / Math.PI;
		}
		else if (isNum(aa))
		{
			 ab = 90 - aa;
		     var BB = ab * Math.PI/180;
			 var AA = aa * Math.PI/180;

             //sb = sa * Math.sin(BB)/Math.sin(AA);		
             sa = sb * Math.sin(AA)/Math.sin(BB);		
			 sc = Math.sqrt(sa * sa + sb * sb);
		}
		else if (isNum(ab))
		{
			 aa = 90 - ab;
		     var BB = ab * Math.PI/180;
			 var AA = aa * Math.PI/180;

             sa = sb * Math.sin(AA)/Math.sin(BB);		
			 sc = Math.sqrt(sa * sa + sb * sb);
		}
        else return;				
	}
	
	else if (p == "3")
	{
	    //!!!("1");
	    if (isNum(sa))
		{
		     //sc = (sa * sa + sb * sb);
			 sb = Math.sqrt(sc * sc - sa * sa);
			 aa = Math.asin(sa/sc) * 180 / Math.PI;
			 ab = Math.asin(sb/sc) * 180 / Math.PI;
		}
		else if (isNum(sb))
		{
		     sa = Math.sqrt(sc * sc - sb * sb);
			 aa = Math.asin(sa/sc) * 180 / Math.PI;
			 ab = Math.asin(sb/sc) * 180 / Math.PI;
		}
		else if (isNum(aa))
		{
			 ab = 90 - aa;
		     var BB = ab * Math.PI/180;
			 var AA = aa * Math.PI/180;

             sb = sc * Math.sin(BB);		
             sa = sc * Math.sin(AA);		
		}
		else if (isNum(ab))
		{
			 aa = 90 - ab;
		     var BB = ab * Math.PI/180;
			 var AA = aa * Math.PI/180;

             sb = sc * Math.sin(BB);		
             sa = sc * Math.sin(AA);		
		}
        else return;		
	}
	
	else if (p == "4")
	{
		var AA = aa * Math.PI / 180;
		ab = 90 - aa;
		var BB = ab * Math.PI / 180;
		
	    if (isNum(sa))
		{
		     sc = sa / Math.sin(AA);
			 sb = Math.sqrt(sc * sc - sa * sa);
		}
		else if (isNum(sb))
		{
		     sc = sa / Math.sin(AA);		
		     sa = Math.sqrt(sc * sc - sb * sb);
		}
		else if (isNum(sc))
		{
			 sa = sc * Math.sin(AA);
			 sb = sc * Math.sin(BB);			 
		}
        else return;
	}
	
	else if (p == "5")
	{
		aa = 90 - ab;
		var AA = aa * Math.PI / 180;
		var BB = ab * Math.PI / 180;
		
	    if (isNum(sa))
		{
		     sc = sa / Math.sin(AA);
			 sb = Math.sqrt(sc * sc - sa * sa);
		}
		else if (isNum(sb))
		{
		     sc = sb / Math.sin(BB);		
		     sa = Math.sqrt(sc * sc - sb * sb);
			 //!!!(sc);
			 //!!!(sa);
			 //!!!(sb);
		}
		else if (isNum(sc))
		{
			 sa = sc * Math.sin(AA);
			 sb = sc * Math.sin(BB);			 
		}
        else return;
	}
	
	ar = 0.5 * sa * sb;
	peri = sa + sb + sc;
	//cr = sa / (2 * (aa * Math.PI/180));
	cr = 0.5 * sc;
	ir = sa * sb / (sa + sb + sc);
	
	//if (sa > sb)
	//	ir = sb * 0.5 * Math.sqrt((2 * sa - sb)/(2 * sa + sb));
	//else
	//	ir = sa * 0.5 * Math.sqrt((2 * sb - sa)/(2 * sa + sb));
	
	var altc = sa * sb / sc;
	var bisa = 2 * sb * sc * Math.cos(0.5 * aa * Math.PI/180) / (sb + sc);
	var bisb = 2 * sa * sc * Math.cos(0.5 * ab * Math.PI/180) / (sa + sc);
	var bisc = sa * sa * sb * sb * Math.sqrt(2) / ((sa + sb) * (sa + sb));
	var meda = Math.sqrt(sb * sb + 0.25 * sa * sa);
	var medb = Math.sqrt(sa * sa + 0.25 * sb * sb);
	var medc = sc / 2;
	
	if (sa % 1 != 0)
	{
	sa= sa.toFixed(6);
	sa= sa.replace(/0+$/,"");
	sa= sa.replace(/\.$/,"");
	}
		
	if (sb % 1 != 0)
	{
	sb= sb.toFixed(6);
	sb= sb.replace(/0+$/,"");
	sb= sb.replace(/\.$/,"");
	}
		
	if (sc % 1 != 0)
	{
	sc= sc.toFixed(6);
	sc= sc.replace(/0+$/,"");
	sc= sc.replace(/\.$/,"");
	}
		
	if (aa % 1 != 0)
	{
	aa= aa.toFixed(6);
	aa= aa.replace(/0+$/,"");
	aa= aa.replace(/\.$/,"");
	}
		
	if (ab % 1 != 0)
	{
	ab= ab.toFixed(6);
	ab= ab.replace(/0+$/,"");
	ab= ab.replace(/\.$/,"");
	}
		
	if (ar % 1 != 0)
	{
	ar= ar.toFixed(6);
	ar= ar.replace(/0+$/,"");
	ar= ar.replace(/\.$/,"");
	}
		
	if (cr % 1 != 0)
	{
	cr= cr.toFixed(6);
	cr= cr.replace(/0+$/,"");
	cr= cr.replace(/\.$/,"");
	}
		
	if (ir % 1 != 0)
	{
	ir= ir.toFixed(6);
	ir= ir.replace(/0+$/,"");
	ir= ir.replace(/\.$/,"");
	}
		
	if (bisa % 1 != 0)
	{
	bisa= bisa.toFixed(6);
	bisa= bisa.replace(/0+$/,"");
	bisa= bisa.replace(/\.$/,"");
	}
		
	if (bisb % 1 != 0)
	{
	bisb= bisb.toFixed(6);
	bisb= bisb.replace(/0+$/,"");
	bisb= bisb.replace(/\.$/,"");
	}
		
	if (bisc % 1 != 0)
	{
	bisc= bisc.toFixed(6);
	bisc= bisc.replace(/0+$/,"");
	bisc= bisc.replace(/\.$/,"");
	}
		
	if (meda % 1 != 0)
	{
	meda= meda.toFixed(6);
	meda= meda.replace(/0+$/,"");
	meda= meda.replace(/\.$/,"");
	}
		
	if (medb % 1 != 0)
	{
	medb= medb.toFixed(6);
	medb= medb.replace(/0+$/,"");
	medb= medb.replace(/\.$/,"");
	}
		
	if (medc % 1 != 0)
	{
	medc= medc.toFixed(6);
	medc= medc.replace(/0+$/,"");
	medc= medc.replace(/\.$/,"");
	}
		
	if (peri % 1 != 0)
	{
	peri= peri.toFixed(6);
	peri= peri.replace(/0+$/,"");
	peri= peri.replace(/\.$/,"");
	}
		
	if (altc % 1 != 0)
	{
	altc= altc.toFixed(6);
	altc= altc.replace(/0+$/,"");
	altc= altc.replace(/\.$/,"");
	}
	
	document.righttriangle.lengthZ.value = sc;
	document.righttriangle.lengthY.value = sb;
	document.righttriangle.lengthX.value = sa;
	document.righttriangle.lengthA.value = aa;
	document.righttriangle.lengthB.value = ab;
	document.righttriangle.area.value = ar;
	document.righttriangle.perimeter.value = peri;
	document.righttriangle.ccr.value = cr;
	document.righttriangle.icr.value = ir;
	document.righttriangle.altc.value = altc;
	document.righttriangle.bisa.value = bisa;
	document.righttriangle.bisb.value = bisb;
	document.righttriangle.bisc.value = bisc;
	document.righttriangle.meda.value = meda;
	document.righttriangle.medc.value = medc;
	document.righttriangle.medb.value = medb;
}
