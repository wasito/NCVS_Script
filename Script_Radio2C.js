            function radio2C() {
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
                item[nomorItem] = "a. VHF DCS";
                var a1 = [1, 2];
                var a2 = ["Area A1", "Area A1+A2"];
                var a3 = [["Wajib dilengkapi dengan 1 (satu) unit perangkat radio yang memenuhi persyaratan Standar Kapal Non Konvensi Bab III Seksi 4 klausul 4.2.1.1"], ["Wajib dilengkapi dengan 1 (satu) unit perangkat radio yang memenuhi persyaratan Standar Kapal Non Konvensi Bab III Seksi 4 klausul. 4.2.1.1"]];
                var i = -1;
                do {
                    i++;
                }
                while (ArRad < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 0

               
nomorItem = 0;item[nomorItem] = 'a. VHF DCS';a1[0] = 1;a2[0] = 'Area A1';a3[0] = [];a3[0][0] = 'Wajib dilengkapi dengan 1 (satu) unit perangkat radio yang memenuhi persyaratan Standar Kapal Non Konvensi Bab III Seksi 4 klausul 4.2.1.1';
a1[1] = 2;a2[1] = 'Area A1+A2';a3[1] = [];a3[1][0] = 'Wajib dilengkapi dengan 1 (satu) unit perangkat radio yang memenuhi persyaratan Standar Kapal Non Konvensi Bab III Seksi 4 klausul 4.2.1.1';i = -1; do { i++;} while (ArRad> a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 1;item[nomorItem] = 'b. MF DSC';a1[0] = 1;a2[0] = 'Area A1';a3[0] = [];a3[0][0] = 'Tidak diwajibkan';
a1[1] = 2;a2[1] = 'Area A1+A2';a3[1] = [];a3[1][0] = 'Wajib dilengkapi dengan 1 (satu) unit perangkat radio yang memenuhi persyaratan Standar Kapal Non Konvensi Bab III Seksi 4 klausul 4.2.1.2';i = -1; do { i++;} while (ArRad> a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 2;item[nomorItem] = 'c. HF DSC';a1[0] = 1;a2[0] = 'Area A1';a3[0] = [];a3[0][0] = 'Tidak diwajibkan';
a1[1] = 2;a2[1] = 'Area A1+A2';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (ArRad> a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 3;item[nomorItem] = 'd. NARROW BAND DIRECT PRINTING (NBDP)';a1[0] = 1;a2[0] = 'Area A1';a3[0] = [];a3[0][0] = 'Tidak diwajibkan';
a1[1] = 2;a2[1] = 'Area A1+A2';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (ArRad> a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 4;item[nomorItem] = 'e. INMARSAT';a1[0] = 1;a2[0] = 'Area A1';a3[0] = [];a3[0][0] = 'Tidak diwajibkan';
a1[1] = 2;a2[1] = 'Area A1+A2';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (ArRad> a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 5;item[nomorItem] = 'f. NAVTEX';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Wajib dilengkapi dengan 1 (satu) unit yang memenuhi persyaratan Standar Kapal Non Konvensi Bab III Seksi 4 klausul 4.2.1.4';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 6;item[nomorItem] = 'g. EPIRB';a1[0] = 500;a2[0] = 'GT lebih besar atau sama dengan 500';a3[0] = [];a3[0][0] = 'Wajib dilengkapi dengan 1 (satu) unit yang memenuhi persyaratan Standar Kapal Non Konvensi Bab III Seksi 4 klausul 4.2.1.3';
a1[1] = 300;a2[1] = 'GT 300 sampai dengan kurang dari 500';a3[1] = [];a3[1][0] = 'Wajib dilengkapi dengan 1 (satu) unit yang memenuhi persyaratan Standar Kapal Non Konvensi Bab III Seksi 4 klausul 4.2.1.3';
a1[2] = 35;a2[2] = 'GT 35 sampai dengan kurang dari 300';a3[2] = [];a3[2][0] = 'Wajib dilengkapi dengan 1 (satu) unit yang memenuhi persyaratan Standar Kapal Non Konvensi Bab III Seksi 4 klausul 4.2.1.3';
a1[3] = 0;a2[3] = 'GT kurang dari 35';a3[3] = [];a3[3][0] = 'Wajib dilengkapi dengan 1 (satu) unit yang memenuhi persyaratan Standar Kapal Non Konvensi Bab III Seksi 4 klausul 4.2.1.3';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];


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




		teks="<div style='font-size:10px'><i>Radio2C</i></div>"+teks;

                document.getElementById("demo").innerHTML = teks;


            }