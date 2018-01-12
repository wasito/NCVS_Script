var tipekapalNya = 1;
var alatNya = "Pemadam";  
var daerahNya=1;
var teksTipeKapal;
var teksAlat;
var teksDaerah;
var teksTambahan;
var teksParameter;

                var gtKu=0 ;
                var lKu=0 ;
		var kwKu=0 ;
		var passKu=0 ;
		var kwBoilerku=0 ;
		var ArRad=0 ;




function hasil() {
   
   if (tipekapalNya == 1) {teksTipeKapal = "Kapal Penumpang";}
   else if (tipekapalNya == 2) {teksTipeKapal = "Kapal Non-Penumpang";}
   else  {teksTipeKapal = "Kapal Penangkap Ikan";};

   if (daerahNya ==0) {teksDaerah="Pelayaran Internasional";}
   else if (daerahNya ==1) {teksDaerah="Pelayaran Kawasan Indonesia";}
   else if (daerahNya ==2) {teksDaerah="Pelayaran Lokal";}
   else if (daerahNya ==3) {teksDaerah="Pelayaran Terbatas";}
   else if (daerahNya ==4) {teksDaerah="Pelayaran Pelabuhan";}
   else  {teksDaerah="Pelayaran Perairan Daratan";};

   if (alatNya == "Pemadam") {teksAlat = "Pemadam Kebakaran";}
   else if (alatNya == "LSA") {teksAlat = "Peralatan Keselamatan Jiwa (LSA)";}
   else if (alatNya == "Pemadam") {teksAlat = "Pemadam Kebakaran";}
   else if (alatNya == "Navigasi") {teksAlat = "Peralatan Navigasi";}
   else if (alatNya == "Radio") {teksAlat = "Peralatan Radio";};

	
   if (tipekapalNya == 1){    
      if (alatNya == "Pemadam") {
          if (daerahNya ==0) {
		sementara();
		document.getElementById("demo").innerHTML = "<div style='color:blue'>Sertifikasi mengacu Ketentuan Konvensi Internasional <b>(bukan mengacu NCVS)</b></div>";
  	  }
          else if (daerahNya ==1) {
	  	pemadam1A();
	  }
	  else if (daerahNya ==2) {
	  	pemadam1A();
	  }
	  else if (daerahNya ==3) {
	  	pemadam1A();
	  }
	  else if (daerahNya ==4) {
	  	pemadam1A();
	  }
	  else if (daerahNya ==5) {
	  	pemadam1A();
	  }
          teksParameter ="<br>"+"GT = "+ gtKu +"<br>"+"Jumlah Penumpang = "+passKu+"<br>"+"Panjang Kapal (m) = "+lKu+"<br>"+"kW Mesin Induk = "+kwKu+"<br>"+"kW Boiler = "+kwBoilerku+"<br>"; 

      }
      else if (alatNya == "LSA"){
          if (daerahNya ==0) {
		sementara();
		document.getElementById("demo").innerHTML = "<div style='color:blue'>Sertifikasi mengacu Ketentuan Konvensi Internasional <b>(bukan mengacu NCVS)</b></div>";
  	  }
          else if (daerahNya ==1) {
	  	lsa1A();
	  }
	  else if (daerahNya ==2) {
	  	lsa1B();
	  }
	  else if (daerahNya ==3) {
	  	lsa1C();
	  }
	  else if (daerahNya ==4) {
	  	lsa1D();
	  }
	  else if (daerahNya ==5) {
	  	lsa1E();
	  }
          teksParameter ="<br>"+"GT = "+ gtKu +"<br>"+"Panjang Kapal (m) = "+lKu+"<br>"; 
      }
      else if (alatNya == "Navigasi") {
          if (daerahNya ==0) {
		sementara();
		document.getElementById("demo").innerHTML = "<div style='color:blue'>Sertifikasi mengacu Ketentuan Konvensi Internasional <b>(bukan mengacu NCVS)</b></div>";
  	  }
          else if (daerahNya ==1) {
	  	navigasi1A();
	  }
	  else if (daerahNya ==2) {
	  	navigasi1B();
	  }
	  else if (daerahNya ==3) {
	  	navigasi1C();
	  }
	  else if (daerahNya ==4) {
	  	navigasi1D();
	  }
	  else if (daerahNya ==5) {
	  	navigasi1E();
	  }
          teksParameter ="<br>"+"GT = "+ gtKu +"<br>"; 
      }
      else if (alatNya == "Radio") {
          if (daerahNya ==0) {
		sementara();
		document.getElementById("demo").innerHTML = "<div style='color:blue'>Sertifikasi mengacu Ketentuan Konvensi Internasional <b>(bukan mengacu NCVS)</b></div>";
  	  }
          else if (daerahNya ==1) {
	 	radio1A();
	  }
	  else if (daerahNya ==2) {
	 	radio1B();
	  }
	  else if (daerahNya ==3) {
	 	radio1C();
	  }
	  else if (daerahNya ==4) {
	 	radio1D();
	  }
	  else if (daerahNya ==5) {
	 	radio1E();
	  }
          teksParameter ="<br>"+"GT = "+ gtKu +"<br>"+"Area Radio = ";
	  if (ArRad==1) {teksParameter +="A1"+"<br>";}
	  else if (ArRad==2) {teksParameter +="A1+A2"+"<br>";}
	  else if (ArRad==3) {teksParameter +="A1+A2+A3"+"<br>";};
      }
      //teksTambahan="";
      
   }
   else if (tipekapalNya == 2) {
      if (alatNya == "Pemadam") {
          if (daerahNya ==0) {
	  	sementara();
		if (gtKu>=500) {
			document.getElementById("demo").innerHTML = "<div style='color:blue'>Sertifikasi mengacu Ketentuan Konvensi Internasional <b>(bukan mengacu NCVS)</b></div>";
		} else {
	  		document.getElementById("demo").innerHTML = "<div style='color:blue'>Dalam NCVS tidak diatur (dapat mengacu Ketentuan Konvensi Internasional)</div>";
		}
	  }
	  else if (daerahNya ==1) {
		pemadam2A();
	  }
	  else if (daerahNya ==2) {
		pemadam2B();
	  }
	  else if (daerahNya ==3) {
		pemadam2C();
	  }
	  else if (daerahNya ==4) {
		pemadam2D();
	  }
	  else if (daerahNya ==5) {
		pemadam2E();
	  }


          teksParameter ="<br>"+"GT = "+ gtKu +"<br>"+"Jumlah Penumpang = "+passKu+"<br>"+"Panjang Kapal (m) = "+lKu+"<br>"+"kW Mesin Induk = "+kwKu+"<br>"+"kW Boiler = "+kwBoilerku+"<br>"; 
      }
      else if (alatNya == "LSA"){
          if (daerahNya ==0) {
	  	sementara();
		if (gtKu>=500) {
			document.getElementById("demo").innerHTML = "<div style='color:blue'>Sertifikasi mengacu Ketentuan Konvensi Internasional <b>(bukan mengacu NCVS)</b></div>";
		} else {
	  		lsa2I();
		}
  	  }
          else if (daerahNya ==1) {
	  	lsa2A();
	  }
	  else if (daerahNya ==2) {
	  	lsa2B();
	  }
	  else if (daerahNya ==3) {
	  	lsa2C();
	  }
	  else if (daerahNya ==4) {
	  	lsa2D();
	  }
	  else if (daerahNya ==5) {
	  	lsa2E();
	  }
          teksParameter ="<br>"+"GT = "+ gtKu +"<br>"+"Panjang Kapal (m) = "+lKu+"<br>"; 
      }
      else if (alatNya == "Navigasi") {
          if (daerahNya ==0) {
	  	sementara();
		if (gtKu>=500) {
			document.getElementById("demo").innerHTML = "<div style='color:blue'>Sertifikasi mengacu Ketentuan Konvensi Internasional <b>(bukan mengacu NCVS)</b></div>";
		} else {
	  		document.getElementById("demo").innerHTML = "<div style='color:blue'>Dalam NCVS tidak diatur (dapat mengacu Ketentuan Konvensi Internasional)</div>";
		}
  	  }
          else if (daerahNya ==1) {
	  	nav2A();
	  }
	  else if (daerahNya ==2) {
	  	nav2B();
	  }
	  else if (daerahNya ==3) {
	  	nav2C();
	  }
	  else if (daerahNya ==4) {
	  	nav2D();
	  }
	  else if (daerahNya ==5) {
	  	nav2E();
	  }
          teksParameter ="<br>"+"GT = "+ gtKu +"<br>"; 
      }
      
      else if (alatNya == "Radio") {
          if (daerahNya ==0) {
	  	sementara();
		if (gtKu>=500) {
			document.getElementById("demo").innerHTML = "<div style='color:blue'>Sertifikasi mengacu Ketentuan Konvensi Internasional <b>(bukan mengacu NCVS)</b></div>";
		} else {
	  		document.getElementById("demo").innerHTML = "<div style='color:blue'>Dalam NCVS tidak diatur (dapat mengacu Ketentuan Konvensi Internasional)</div>";
		}
  	  }
          else if (daerahNya ==1) {
	 	radio2A();
	  }
	  else if (daerahNya ==2) {
	 	radio2B();
	  }
	  else if (daerahNya ==3) {
	 	radio2C();
	  }
	  else if (daerahNya ==4) {
	 	radio2D();
	  }
	  else if (daerahNya ==5) {
	 	radio2E();
	  }
          teksParameter ="<br>"+"GT = "+ gtKu +"<br>"+"Area Radio = ";
	  if (ArRad==1) {teksParameter +="A1"+"<br>";}
	  else if (ArRad==2) {teksParameter +="A1+A2"+"<br>";}
	  else if (ArRad==3) {teksParameter +="A1+A2+A3"+"<br>";};
      }
      //teksTambahan="<p style='color:red'>"+"Dalam Konstruksi"+"</p>";
      
   }

   else if (tipekapalNya == 3) {
      if (alatNya == "Pemadam") {
	  sementara();
          if (daerahNya ==1) {
		
	  	document.getElementById("demo").innerHTML = "<div style='color:red'>Dalam Konstruksi</div>";
	  }
	  else {
		
	  	document.getElementById("demo").innerHTML = "<div style='color:red'>Dalam Konstruksi</div>";
	  }
          teksParameter ="<br>"+"GT = "+ gtKu +"<br>"+"Jumlah Penumpang = "+passKu+"<br>"+"Panjang Kapal (m) = "+lKu+"<br>"+"kW Mesin Induk = "+kwKu+"<br>"+"kW Boiler = "+kwBoilerku+"<br>"; 
      }
      else if (alatNya == "LSA"){
	  sementara();
          if (daerahNya ==1) {
	  	document.getElementById("demo").innerHTML = "<div style='color:red'>Dalam Konstruksi</div>";
	  }
	  else {
	  	document.getElementById("demo").innerHTML = "<div style='color:red'>Dalam Konstruksi</div>";
	  }
          teksParameter ="<br>"+"GT = "+ gtKu +"<br>"+"Panjang Kapal (m) = "+lKu+"<br>"; 
      }
      else if (alatNya == "Navigasi") {
	  sementara();
          if (daerahNya ==1) {
	  	document.getElementById("demo").innerHTML = "<div style='color:red'>Dalam Konstruksi</div>";
	  }
	  else {
	  	document.getElementById("demo").innerHTML = "<div style='color:red'>Dalam Konstruksi</div>";
	  }
          teksParameter ="<br>"+"GT = "+ gtKu +"<br>"; 
      }
      else if (alatNya == "Radio") {
	  sementara();
          if (daerahNya ==1) {
	  	document.getElementById("demo").innerHTML = "<div style='color:red'>Dalam Konstruksi</div>";
	  }
	  else {
	  	document.getElementById("demo").innerHTML = "<div style='color:red'>Dalam Konstruksi</div>";
	  }
          teksParameter ="<br>"+"GT = "+ gtKu +"<br>"+"Area Radio = ";
	  if (ArRad==1) {teksParameter +="A1"+"<br>";}
	  else if (ArRad==2) {teksParameter +="A1+A2"+"<br>";}
	  else if (ArRad==3) {teksParameter +="A1+A2+A3"+"<br>";};
      }
      //teksTambahan="<p style='color:red'>"+"Dalam Konstruksi"+"</p>";
      
   }
   
   //di bawah ini sementara
   if (tipekapalNya != 1) {
        //document.getElementById("demo").innerHTML = teksTambahan;    
   }


   document.getElementById("judulAlat").innerHTML = "Persyaratan "+teksAlat+" "+teksTipeKapal;

   

   document.getElementById("judulHasil").innerHTML = "Persyaratan <b>"+teksAlat+"</b> "+teksTipeKapal+" untuk Daerah  "+teksDaerah +", dengan:"+ teksParameter +" sesuai NCVS adalah sebagai berikut:";	     




}//akhir fungsi hasil


function alatFire() {
	document.getElementById("alat").innerHTML = "Pemadam";
	//document.getElementById("displaydropdownAlat").style.display="none";
	alatNya = "Pemadam";
	tampilkanParameter();
	hasil();



}

function alatLSA() {
	document.getElementById("alat").innerHTML = "LSA";
	
    	alatNya = "LSA";
	tampilkanParameter();
    	hasil();

}

function alatNav() {
	document.getElementById("alat").innerHTML = "Navigasi";
	alatNya = "Navigasi";
	tampilkanParameter();
    	hasil();
	//document.getElementById("aNav").style.backgroundColor = "#4CAF50";
	//document.getElementById("aLSA").style.backgroundColor = " #f1f1f1";
	//document.getElementById("aNav").style.fontSize = '35px';
}

function alatRadio() {
	document.getElementById("alat").innerHTML = "Radio";
	alatNya = "Radio";
	tampilkanParameter();
    	hasil();
}

function kapalP() {
	document.getElementById("kapal").innerHTML = "Kapal Penumpang";
	tipekapalNya = 1;
    	hasil();

}

function kapalNp() {
	document.getElementById("kapal").innerHTML = "Kapal Non-Penumpang";
	tipekapalNya = 2;
    hasil();
}

function kapalI() {
	document.getElementById("kapal").innerHTML = "Kapal Penangkap Ikan";
	tipekapalNya = 3;
    hasil();
}

function daerahP0() {
	document.getElementById("daerah").innerHTML = "Daerah Pelayaran Internasional";
	daerahNya=0;
	hasil();
}



function daerahP1() {
	document.getElementById("daerah").innerHTML = "Daerah Pelayaran Kawasan Indonesia";
	daerahNya=1;
	hasil();
}

function daerahP2() {
	document.getElementById("daerah").innerHTML = "Daerah Pelayaran Lokal";
	daerahNya=2;
	hasil();
}

function daerahP3() {
	document.getElementById("daerah").innerHTML = "Daerah Pelayaran Terbatas";
	daerahNya=3;
	hasil();
}

function daerahP4() {
	document.getElementById("daerah").innerHTML = "Daerah Pelayaran Pelabuhan";
	daerahNya=4;
	hasil();
}

function daerahP5() {
	document.getElementById("daerah").innerHTML = "Daerah Pelayaran Perairan Daratan";
	daerahNya=5;
	hasil();
}

function daerahPelFunc() {
	
		
	

	var arPel = document.forms["myForm"]["daerahPel"].value;
	if (arPel == 0) {
		daerahP0();

	} else if (arPel == 1) {
		daerahP1();

	} else if (arPel == 2) {
		daerahP2();
	
	} else if (arPel == 3) {
		if (document.getElementById("id_selectAreaRadio").value > 2) {
			document.getElementById("id_selectAreaRadio").value ="2";
		}
		daerahP3();
		
	} else if (arPel == 4) {
		document.getElementById("id_selectAreaRadio").value ="1";
		daerahP4();
		
	} else if (arPel == 5) {

		document.getElementById("id_selectAreaRadio").value ="1";
		daerahP5();
	}

	//kapal penumpang dan barang
	
	if (tipekapalNya !== 3)  {
		var AR=document.forms["myForm"]["areaRadio"].value;
		if (arPel ==0){	
			document.getElementById("A123[1]").disabled=false;
			document.getElementById("A123[2]").disabled=false;
			document.getElementById("A123[3]").disabled=false;
		}
		else if (arPel ==1){	
			document.getElementById("A123[1]").disabled=false;
			document.getElementById("A123[2]").disabled=false;
			document.getElementById("A123[3]").disabled=false;
		}
		else if (arPel ==2){	
			document.getElementById("A123[1]").disabled=false;
			document.getElementById("A123[2]").disabled=false;
			document.getElementById("A123[3]").disabled=false;
		}
		else if (arPel ==3){	
			document.getElementById("A123[1]").disabled=false;
			document.getElementById("A123[2]").disabled=false;
			document.getElementById("A123[3]").disabled=true;
			//if (AR>2) {document.getElementById("A123[2]").selected="selected"} 
		}
		else if (arPel ==4){	
			document.getElementById("A123[1]").disabled=false;
			document.getElementById("A123[2]").disabled=true;
			document.getElementById("A123[3]").disabled=true;
			//document.getElementById("A123[1]").selected="selected";
			
		}
		else if (arPel ==5){	
			document.getElementById("A123[1]").disabled=false;
			document.getElementById("A123[2]").disabled=true;
			document.getElementById("A123[3]").disabled=true;;
		}
	
	}	
	
	
}

function tipeKapalFunc() {
	var tipeKpl = document.forms["myForm"]["tipeKapal"].value;
	if (tipeKpl == 1) {
		kapalP();
	} else if (tipeKpl == 2) {
		kapalNp();
	
	} else if (tipeKpl == 3) {
		kapalI();
		
	} 		
	
	
}

function jenisAlatFunc() {
	var jnsAlat = document.forms["myFormItem"]["jenisAlat"].value;
	if (jnsAlat == 1) {
		alatFire();
	} else if (jnsAlat == 2) {
		alatLSA();
	
	} else if (jnsAlat == 3) {
		alatNav();
		
	} else if (jnsAlat == 4) {
		alatRadio();
		
	}		
	
	
}

function tampilkanParameter(){
	var muncul="inline";
	var tdkMuncul="none";
        document.getElementById("displayinputGT").style.display=tdkMuncul ;
        document.getElementById("displayinputNPassgr").style.display=tdkMuncul;
        document.getElementById("displayinputL").style.display=tdkMuncul;
        document.getElementById("displayinputkWMesin").style.display=tdkMuncul;
        document.getElementById("displayinputkWBoiler").style.display=tdkMuncul;
        document.getElementById("displayinputAreaRadio").style.display=tdkMuncul;

	if (alatNya == "Pemadam") {
        document.getElementById("displayinputGT").style.display=muncul ;
        document.getElementById("displayinputNPassgr").style.display=muncul;
        document.getElementById("displayinputL").style.display=muncul;
        document.getElementById("displayinputkWMesin").style.display=muncul;
        document.getElementById("displayinputkWBoiler").style.display=muncul;
	}
	else if (alatNya == "LSA") {
        document.getElementById("displayinputGT").style.display=muncul ;
        document.getElementById("displayinputL").style.display=muncul;
	}
	else if (alatNya == "Navigasi") {
        document.getElementById("displayinputGT").style.display=muncul ;
	}
	else if (alatNya == "Radio") {
        document.getElementById("displayinputGT").style.display=muncul ;
        document.getElementById("displayinputAreaRadio").style.display=muncul;
	}
	//document.getElementById("rowJmlPen1").style ="padding-top:0px;padding-bottom:0px; width:450px ";
	
}


            function pemadam1A() {
                gtKu = document.forms["myForm"]["gtKapal"].value;
                lKu = document.forms["myForm"]["panjangKapal"].value;
		kwKu = document.forms["myForm"]["kwMesin"].value;
		passKu = document.forms["myForm"]["nPassgr"].value;
		kwBoilerku = document.forms["myForm"]["kwBoiler"].value;
		ArRad = document.forms["myForm"]["areaRadio"].value;

                if (gtKu==""){gtKu =0} ;
                if (lKu==""){lKu =0} ;
                if (kwKu==""){kwKu =0} ;
                if (passKu==""){passKu =0} ;
                if (kwBoilerku==""){kwBoilerku =0} ;
                if (ArRad==""){ArRad =0} ;



                var item = [];
                var batasan = [];
                var persyaratan = [];

                nomorItem = 0;
                item[nomorItem] = "a. Sistem alarm dan komunikasi";
                var a1 = [25, 0];
                var a2 = ["Panjang: 25 meter atau lebih", "Panjang: Kurang dari 25 meter"];
                var a3 = [["Wajib dipasang tombol alarm kebakaran manual ditiap-tiap dek di dalam ruang akomodasi dan ruang layanan ditempat yang mudah ditemukan dan dijangkau.", "Wajib dipasang alarm khusus yang dioperasikan dari anjungan navigasi atau stasiun kendali kebakaran untuk memanggil awak kapal. Alarm ini dapat merupakan bagian dari sistem alarm umum kapal, tapi alarm demikian harus dapat dibunyikan secara terpisah ke ruang-ruang penumpang.", "Wajib dipasang suatu sistem pemberitahuan umum (public address system) atau sarana komunikasi lain yang efektif di seluruh akomodasi, ruang layanan dan stasiun kendali kebakaran."], ["Wajib dilengkapi dengan penandaan lain (lihat persyaratan untuk panjang 25 meter ke atas)"]];

                var i = -1;
                do {
                    i++;
                }
                while (lKu < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 0

                nomorItem = 1;
                item[nomorItem] = "b. Pompa utama pemadam kebakaran";
                a1 = [4000, 500, 50, 20, 0];
                a2 = ["GT lebih besar atau sama dengan 4.000", "GT 500 sampai dengan kurang dari 4.000", "GT 50 sampai dengan kurang dari 500", "GT 20 sampai dengan kurang dari 50", "GT kurang dari 20 (di NCVS tidak ada)"];
                a3 = [["Wajib dilengkapi minimum 3 (tiga) unit pompa pemadam kebakaran dengan kapasitas tidak kurang dari 2/3 kapasitas pompa-pompa bilga yang dipersyaratkan.", "Tekanan minimum pada tiap hidran 0,31 N/mm2", "Tiap pompa harus dapat mengahasilkan pancaran secara serentak melalui 2 hidran."], ["Wajib dilengkapi minimum 2 (dua) unit pompa pemadam kebakaran dengan kapasitas tidak kurang dari 2/3 kapasitas pompa-pompa bilga yang dipersyaratkan", "Tekanan minimum pada tiap hidran :", "Tiap pompa harus dapat mengahsilkan pancaran secara serentak melalui 2 hidran."], ["Wajib dilengkapi minimum 1 (satu) unit pompa pemadam kebakaran dengan kapasitas tidak kurang dari 2/3 kapasitas pompa-pompa bilga yang dipersyaratkan", "Tekanan minimum pada tiap hidran 0,20 N/mm2", "Pompa harus dapat menghasilkan pancaran dari tiap hidran"], ["Wajib dilengkapi minimum 1 (satu) unit pompa pemadam kebakaran portabel dengan tenaga penggerak yang dapat menghasilkan pancaran air melalui nosel dengan diameter 10 mm sejauh 6 m."], ["NIL"]];

                if (gtKu >= 1000) {
                    a3[nomorItem][1] = "Tekanan minimum pada tiap hidran :0.275 N/mm2 [GT 4.000 sampai dengan lebih besar dan sama dengan 1.000]";
                }
                else {
                    a3[nomorItem][1] = "Tekanan minimum pada tiap hidran :0.200 N/mm2 [GT 500 sampai dengan kurang dari 1.000]";
                }

                i = -1;
                do {
                    i++;
                }
                while (gtKu < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 1

                nomorItem = 2;
                item[nomorItem] = "c. Penataan pompa";
                a1 = [1000, 0];
                a2 = ["GT sama dengan atau lebih besar dari 1.000", "GT kurang dari 1000 (di NCVS tidak ada)"];
                a3 = [["Penantaan pompa – pompa, sumber daya dan saluran masuk air laut harus sedemikian rupa sehingga bila terjadi kebakaran dalam satu kompartemen tidak akan menyebabkan semua pompa kebakaran tidak berfungsi .", "Penataan pompa – pompa, pipa pemadam kebakaran harus sedemikian rupa sehingga satu pancaran air yang efektif dapat langsung tersedia di dalam ruangan (interior location)."], ["NIL"]];

                i = -1;
                do {
                    i++;
                }
                while (gtKu < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 2

                nomorItem = 3;
                item[nomorItem] = "d. Pompa pemadam kebakaran darurat";
                a1 = [1000, 50, 0];
                a2 = ["GT 1000 ke atas (di NCVS tidak ada)", "GT 50 sampai dengan kurang dari 1.000", "GT kurang dari 50 "];
                a3 = [[""], ["Bila kebakaran dapat menyebabkan semua pompa kebakaran utama tidak berfungsi, maka dipasang 1 pompa kebakaran darurat tetap dengan penggerak mesin diluar kompartemen dimana pompa – pompa kebakaran utama berada.", "Pompa kebakaran darurat tetap dengan penggerak mesin harus dapat menghasilkan sekurang-kurangnya satu pancaran air dari setiap hidran, slang dan nosel dimana tekanan pada setiap hidran dipertahankan sekurang-kurangnya 20 N/mm2"], ["Tidak diwajibkan"]];

                //karena di NCVS tidak ada maka di atas 1000 disamakan dengan yg 500 sampai 1000
                a3[0] = a3[1];

                i = -1;
                do {
                    i++;
                }
                while (gtKu < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 3

                nomorItem = 4;
                item[nomorItem] = "e. Hidran, slang dan nosel nosel pemadam kebakaran.";
                a1 = [50, 0];
                a2 = ["GT sama dengan atau lebih besar dari50","GT kurang dari 50" ];
                a3 = [["Wajib dilengkapi minimum 2 (dua) buah ditambah 1 (satu) buah setiap kelebihan dari kelipatan 25 m panjang kapal.","Ruang permesinan wajib dilengkapi minimum 1 (satu) buah, dilengkapi dengan nosel tipe dual purpose (pancar dan semprot)."],["Tidak diwajibkan"]];

                i = -1;
                do {
                    i++;
                }
                while (gtKu < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 4

                nomorItem = 5;
                item[nomorItem] = "f. Sistem springkler(water sprinkler system).";
                a1 = [175, 0];
                a2 = ["GT sama dengan atau lebih besar dari 175","GT kurang dari 175" ];
                a3 = [["Wajib dilengkapi di ruang penumpang, akomodasi ABK, ruang muatan, ruang layanan dan geladak kendaraan."],["Tidak diwajibkan"]];

                i = -1;
                do {
                    i++;
                }
                while (gtKu < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 5

                nomorItem = 6;
                item[nomorItem] = "g. Alat pendeteksi kebakaran";
                a1 = [500,300,175, 0];
                a2 = ["GT 500 ke atas (di NCVS tidak ada) ","GT 300 sampai dengan kurang dari 500","GT 175 sampai dengan kurang dari 300","GT kurang dari 175" ];
                a3 = [[""],["Wajib dilengkapi di ruang tangga, koridor dan jalur penyelamatan diri pada ruang akomodasi ABK, di ruang penumpang,ruang permesinan yang tidak dijaga, ruang layanan dan ruang-ruang tertutup lainnya yang rentan terhadap kebakaran"],["Wajib dilengkapi dengan alat detektor lokal (menggunakan baterai) di ruang akomodasi."],["Tidak diwajibkan"]];
                //karena di NCVS tidak ada maka di atas 500 disamakan dengan yg GT 300 sampai 500
                a3[0] = a3[1];

                i = -1;
                do {
                    i++;
                }
                while (gtKu < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 6

                nomorItem = 7;
                item[nomorItem] = "h. Alarm kebakaran";
                a1 = [35, 0];
                a2 = ["GT lebih besar dan sama dengan 35","GT kurang dari 35" ];
                a3 = [["Wajib dilengkapi di akomodasi ABK, di ruang penumpang,ruang muatan, geladak kendaraan ruang layanan, dan ruang mesin."],["Tidak diwajibkan."]];
                

                i = -1;
                do {
                    i++;
                }
                while (gtKu < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 7

nomorItem = 8;item[nomorItem] = 'i. Instalasi pemadam kebakaran tetap di ruang permesinan.';a1[0] = 375;a2[0] = 'Daya mesin sama dengan atau lebih besar dari 375 kW';a3[0] = [];a3[0][0] = 'Di ruang permesinan Wajib dilengkapi dengan salah satu dari :';
a3[0][1]=[];a3[0][1][0] = '(1) CO2';
a3[0][1][1] = '(2) Busa tekanan tinggi';
a3[0][1][2] = '(3) Air pancar (water fog)';
a1[1] = 0;a2[1] = 'Daya mesin kurang dari 375 kW';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (kwKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 9;item[nomorItem] = 'j. Instalasi pemadam kebakaran tetap di ruang muat';a1[0] = 500;a2[0] = 'GT sama dengan atau lebih besar dari 500';a3[0] = [];a3[0][0] = 'Wajib dilengkapi dengan CO2';
a1[1] = 0;a2[1] = 'GT kurang dari 500';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 10;item[nomorItem] = 'k. Perangkat pemadam busa dan CO2 bukan portabel di kamar mesin.';a1[0] = 375;a2[0] = 'Daya mesin sama dengan atau lebih besar dari 375 kW';a3[0] = [];a3[0][0] = 'Tiap ruangan yang berisikan permesinan pembakaran dalam yang digunakan untuk penggerak utama, atau yang memiliki total tenaga tidak kurang dari 375 kW untuk mesin bantu harus dilengkapi dengan : 1 (satu) tabung pemadam busa kapasitas 45 liter atau jenis lain yang setara';
a1[1] = 0;a2[1] = 'Daya mesin kurang dari 375 kW';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (kwKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];



//mas ikhssan

nomorItem = 11;item[nomorItem] = 'l. Perangkat pemadam busa dan CO2 bukan portabel di boiler room (ruang ketel)';a1[0] = 175;a2[0] = 'Daya ketel sama dengan atau lebih besar dari 175 kW.';a3[0] = [];a3[0][0] = 'Jika kapal dilengkapi boiler, maka di boiler room (ruang ketel) dilengkapi dengan 1 (satu) tabung pemadam busa kapasitas 135 liter atau jenis lain yang setara.';
a1[1] = 0;a2[1] = 'Daya ketel kurang dari 175 kW';a3[1] = [];a3[1][0] = 'Tidak diwajibkan.';i = -1; do { i++;} while (kwBoilerku< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 12;item[nomorItem] = 'm. perangkat pemadam kebakaran api portabel.';a1[0] = 50;a2[0] = 'Panjang 50 meter atau lebih';a3[0] = [];a3[0][0] = '2 (dua) unit dry chemical masing - masing 4.5 kg di tiap geladak untuk ruang akomodasi dan ruang layanan antara dinding kedap air dan dinding zona kebakaran.';
a3[0][1] = '1 (satu) unit dry chemical 4.5 kg di dapur yang luas geladaknya lebih kecil dan sama dengan 15 m2 dan 2 (dua) unit untuk ruang yang lebih besar';
a3[0][2] = '1 (satu) unit CO2 kapasitas 6,8 kg di stasiun kendali anjungan.';
a3[0][3] = '2 (dua) unit Foam masing - masing 9 liter yang sesuai untuk memadamkan kebakaran minyak pada ruang ketel.';
a3[0][4] = 'Ruang permesinan dilengkapi minimum 2 (dua) unit terdiri dari 1 (satu) unit foam 9 liter dan 1 (satu) unit CO2 6,8 kg dan tidak lebih dari 6 (enam)';
a3[0][5] = 'Ruang layanan lainnya minimum 1 (satu) unit dry chemical masing - masing 4,5 kg';
a1[1] = 25;a2[1] = 'Panjang 25 meter atau lebih dan kurang dari 50 meter';a3[1] = [];a3[1][0] = '1 (satu) unit dry chemical 4.5 kg untuk tiap ruang penumpang dan ruang ABK di tiap geladak.';
a3[1][1] = '1 (satu) unit dry chemical 4.5 kg di dapur';
a3[1][2] = '2 (dua) unit tabung pemadam di ruang permesinan yang terdiri dari 1 (satu) unit foam 9 liter dan 1 (satu) unit CO2 6,8 kg';
a3[1][3] = 'Ruang layanan lainnya minimum 1 (satu) unit dry chemical masing - masing 4.5 kg';
a1[2] = 0;a2[2] = 'Panjang kurang dari 25 meter';a3[2] = [];a3[2][0] = '1 (satu) unit unit dry chemical kapasitas 4,5 kg untuk tiap ruang penumpang dan ruang ABK di tiap geladak';
a3[2][1] = '1 (satu) unit dry chemical kapasitas 4,5 kg di dapur';
a3[2][2] = '1 (satu) unit tabung pemadam dry powder 4.5 kg di ruang permesinan, apabila tidak memungkinkan dapat ditempatkan di luar kamar mesin.';i = -1; do { i++;} while (lKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 13;item[nomorItem] = 'n. Pasir.';a1[0] = 175;a2[0] = 'Daya ketel sama dengan atau lebih besar dari 175 kW';a3[0] = [];a3[0][0] = 'Wajib dilengkapi dengan 0.5 m3 dan 1 (satu) sekop';
a1[1] = 0;a2[1] = 'Daya ketel kurang 175 kW';a3[1] = [];a3[1][0] = 'Wajib dilengkapi dengan 0.25 m3 dan 1 (satu) sekop';i = -1; do { i++;} while (kwBoilerku< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 14;item[nomorItem] = 'o. Selimut pemadam kebakaran.';a1[0] = 175;a2[0] = 'GT sama dengan atau lebih besar dari 175';a3[0] = [];a3[0][0] = 'Setiap dapur dilengkapi dengan 1 (satu) unit selimut pemadam kebakaran.';
a1[1] = 35;a2[1] = 'GT sama dengan 35 sampai dengan kurang dari 175';a3[1] = [];a3[1][0] = 'Setiap dapur dilengkapi dengan minimal 4 (empat) unit karung goni yang siap dibasahkan.';
a1[2] = 0;a2[2] = 'GT kurang dari 35';a3[2] = [];a3[2][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 15;item[nomorItem] = 'p. Perlengkapan petugas pemadam.';a1[0] = 50;a2[0] = 'Panjang 50 meter atau lebih';a3[0] = [];a3[0][0] = 'Wajib dilengkapi 2 (dua) set (perlengkapan petugas dan alat pernafasan) beserta tambahan 1 (satu) set untuk tiap 30 meter panjang kapal yang panjangnya lebih dari 80 meter.';
a3[0][1] = 'Disamping itu harus disediakan tambahan 2 (dua) tabung cadangan alat bantu pernapasan.';
a1[1] = 25;a2[1] = 'Panjang 25 atau lebih dan kurang dari 50 meter';a3[1] = [];a3[1][0] = 'Wajib dilengkapi 1 (satu) set dan 1 (satu) tabung cadangan alat bantu pernapasan.';
a1[2] = 0;a2[2] = 'Panjang Kurang dari 25 meter';a3[2] = [];a3[2][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (lKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 16;item[nomorItem] = 'q. Sambungan darat Internasional.';a1[0] = 35;a2[0] = 'GT sama dengan atau lebih besar dari 35';a3[0] = [];a3[0][0] = 'Dilengkapi 1 (satu) unit sambungan darat Internasional, yang diberi tanda dan ditempatkan di tempat yang aman dan mudah dilihat.';
a1[1] = 0;a2[1] = 'GT kurang dari 35';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 17;item[nomorItem] = 'r. Alat bantu pernafasan untuk meloloskandiri (EEBD).';a1[0] = 500;a2[0] = 'GT sama dengan atau lebih besar dari 500';a3[0] = [];a3[0][0] = 'Dilengkapi 2 (dua) unit alat bantu pernafasan untuk meloloskan diridi ruang akomodasi/penumpang, ruang permesinan pada setiap dek dan ruang pengendalian di anjungan. Alat tersebut ditempatkan ditempat yang aman dan hanya digunakan apabila diperlukan.';
a1[1] = 0;a2[1] = 'GT kurang dari 500';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 18;item[nomorItem] = 's. Rute untuk meloloskan diri (Escape route).';a1[0] = 300;a2[0] = 'GT sama dengan atau lebih besar dari 300';a3[0] = [];a3[0][0] = 'Setiap ruangan penumpang dan ruang permesinan wajib memiliki rute meloloskan diri dalam keadaan darurat.';
a3[0][1] = 'Setiap kamar penumpang, dek penumpang dan ruang akomodasi lainnya wajib diberikan informasi posisi keberadaan dan jalur terdekat untuk meloloskan diri dalam bentuk peta yang mudah dimengerti oleh penumpang.';
a3[0][2] = 'Jalur meloloskan diri harus diberi tanda, stiker reflektor yang dapat membantu untuk melarikan diri pada saat lampu padam.';
a1[1] = 0;a2[1] = 'GT kurang dari 300';a3[1] = [];a3[1][0] = 'Setiap ruangan penumpang dan ruang permesinan wajib memiliki rute meloloskan diri dalam keadaan darurat.';
a3[1][1] = 'Setiap kamar penumpang, dek penumpang dan ruang akomodasi lainnya wajib diberikan informasi posisi keberadaan dan jalur terdekat untuk meloloskan diri dalam bentuk peta yang mudah dimengerti oleh penumpang.';
a3[1][2] = 'Jalur meloloskan diri harus diberi tanda, stiker reflektor yang dapat membantu untuk melarikan diri pada saat lampu padam.';
a3[1][3] = 'Khusus untuk kapal penumpang dan kapal penumpang kecepatan tinggi dengan pintu untuk meloloskan diri yang terbatas tetapi memiliki jendela akomodasi yang dapat digunakan untuk meloloskan diri maka kaca jendela tersebut harus terbuat dari kaca yang diperkuat (toughened glass) dan dilengkapi alat pemukul kaca, sehingga dapat dipecahkan pada saat keadaan darurat.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 19;item[nomorItem] = 't. Bagan pengendali kebakaran (Fire control plan)';a1[0] = 36;a2[0] = 'Jumlah penumpang sama dengan atau lebih besar dari 36 penumpang';a3[0] = [];a3[0][0] = 'Bagan pengendali kebakaran yang telah dikukuhkan oleh pejabat yang berwenang wajib dipasang di dinding interior kapal yang mudah dilihat.';
a3[0][1] = 'Salinan bagan pengendali kebakaran ini harus dipasang di dalam tabung/kotak tahan api dan kedap air yang aman didekat tangga naik/masuk keatas kapal pada setiap sisi.';
a3[0][2] = 'Tabung/kotak bagan pengendali kebakaran ini harus diberi warna merah dan diberi tanda/stensil “Fire Plan” berwarna putih.';
a3[0][3] = 'Didalam tabung tersebut juga harus dilengkapi salinan daftar awak kapal dan manifest jumlah penumpang yang selalu diperbaharui setiap saat';
a1[1] = 0;a2[1] = 'Jumlah penumpang kurang dari 36 penumpang';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (passKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 20;item[nomorItem] = 'u. Sijil – sijil (muster list) di atas kapal';a1[0] = 175;a2[0] = 'GT sama dengan atau lebih besar dari 175';a3[0] = [];a3[0][0] = 'Perusahaan wajib menyusun sijil – sijil (muster list) seperti yang tertulis di bawah ini :';
a3[0][1]=[];a3[0][1][0] = 'Sijil pemadam kebakaran.';
a3[0][1][1] = 'Sijil meninggalkan kapal.';
a3[0][1][2] = 'Sijil menanggulangi pencemaran.';
a3[0][1][3] = 'Sijil pertolongan orang jatuh ke laut.';
a3[0][1][4] = 'Sijil mengatasi kebocoran.';
a3[0][1][5] = 'Daftar ronda/patroli.';
a1[1] = 0;a2[1] = 'GT kurang dari 175';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];


// mas Ikhsan
// mas Ikhsan














                var teks = "";
                var m;
                for (m = 0; m < item.length; m++) {
                    teks = teks +
                "<div class='divfont1' >" +
                "<b >" + item[m] + "</b>" + "<br><br>" +
                "</div>" +

                "<div class='div1' >" +
                "<table>" +
                "   <tr>" +
                "       <th>" +"Penerapan: "+ batasan[m] + "</th>" +
                "   </tr>" +
                "   <tr>" +
                "       <td >" ;

	
 		if (persyaratan[m].length > 1) {
		    teks=teks+"<ol>";
               


                    for (i = 0; i < persyaratan[m].length; i++) {
			if (Array.isArray(persyaratan[m][i])) {
				teks = teks +"<ol type='a'>";
				var j;
				for (j = 0; j< persyaratan[m][i].length; j++){
					teks = teks +"<li>" + persyaratan[m][i][j] + "</li>";
				}
				teks = teks +"</ol>";
			}
			else {
                        teks = teks + "<li>" + persyaratan[m][i] + "</li>";
			}
                    };
                    teks = teks +"</ol>";

		}
		else {
		    teks =  teks + persyaratan[m];
		}

                    teks = teks +
               




                "</td>" +
                "   </tr>" +

                "</table>" +
                "</div>" +
                "<br>";
                };


		teks="<div style='font-size:10px'><i>Pemadam1</i></div>"+teks;
                document.getElementById("demo").innerHTML = teks;
		

            }
		