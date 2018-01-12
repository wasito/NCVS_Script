            function navigasi1D() {
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
                item[nomorItem] = "a. Pedoman magnet";
                var a1 = [35, 7, 0];
                var a2 = ["GT lebih besar dari 35", "GT 7 sampai dengan kurang dari 35", "GT kurang dari 7"];
                var a3 = [["Wajib dilengkapi dengan 1 (satu) unit yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 5 klausul.5.7 ditambah 1 (satu) unit pedoman magnet cadangan yang siap digunakan setiap saat."], ["Wajib dilengkapi dengan 1 (satu) unit yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 5 klausul. 5.7"], ["Minimal menggunakan pedoman magnet tangan (portabel)."]];
                var i = -1;
                do {
                    i++;
                }
                while (gtKu < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 0


nomorItem = 1;item[nomorItem] = 'b. Pelorus atau alat baring pedoman (Pelorus or Compass Bearing Device)';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Wajib dilengkapi, minimum dengan alat baring sederhana (perangkat jarum semat)';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 2;item[nomorItem] = 'c. Alat koreksi haluan dan baringan (Daftar deviasi)';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Wajib dilengkapi. Catatan : Semua kompas magnet sebelum digunakan dan yang baru selesai melaksanakan pengeringan (dry docking) wajib di timbal';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 3;item[nomorItem] = 'd. Peta laut/sistem peraga peta dan informasi elektronik';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Wajib dilengkapi peta laut yang sesuai dengan daerah pelayarannya, atau dapat diganti dengan peralatan eletronik peta (ECDIS) lengkap dengan penataan cadangannya.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 4;item[nomorItem] = 'e. Publikasi nautika';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Wajib dilengkapi publikasi nautika yang sesuai dengan daerah pelayarannya.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 5;item[nomorItem] = 'f. Radar 9 GHz (Pertama)';a1[0] = 35;a2[0] = 'GT lebih besar dan sama dengan 35';a3[0] = [];a3[0][0] = 'Wajib dilengkapi radar 9 GHz yang minimal memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 5 klausul 5.9.1';
a1[1] = 0;a2[1] = 'GT kurang dari 35';a3[1] = [];a3[1][0] = 'Tidak diwajibkan.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 6;item[nomorItem] = 'g. Alat bantu ploting elektronik';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 7;item[nomorItem] = 'h. Alat ukur kecepatan';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 8;item[nomorItem] = 'i. Perum gema (echo sounding device)';a1[0] = 300;a2[0] = 'GT lebih besar dan sama dengan 300';a3[0] = [];a3[0][0] = 'Wajib dilengkapi perum gema yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 17 klausul 17.5';
a1[1] = 0;a2[1] = 'GT kurang dari 300';a3[1] = [];a3[1][0] = 'Wajib dilengkapi dengan perum tangan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 9;item[nomorItem] = 'j. Indikator sudut daun kemudi, putaran baling-baling, kisar dan mode operasi baling – baling, arah daya dorong.';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Tidak diwajibkan, catatan:';
a3[0][1]=[];a3[0][1][0] = 'Untuk semua ukuran kapal indikator sudut daun kemudi diwajibkan.';
a3[0][1][1] = 'Untuk tipe CPP : kisar dan mode operasi baling – baling, diwajibkan.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 10;item[nomorItem] = 'k. Corong pemberitahuan (Public addressor)';a1[0] = 35;a2[0] = 'GT lebih besar dan sama dengan 35';a3[0] = [];a3[0][0] = 'Wajib dilengkapi yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi. 12';
a1[1] = 0;a2[1] = 'GT kurang dari 35';a3[1] = [];a3[1][0] = 'Wajib dilengkapi dengan pengeras suara portabel';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 11;item[nomorItem] = 'l. Alat komunikasi ke tempat pengemudian darurat';a1[0] = 300;a2[0] = 'GT lebih besar dan sama dengan 300';a3[0] = [];a3[0][0] = 'Wajib dilengkapi';
a1[1] = 0;a2[1] = 'GT kurang dari 300';a3[1] = [];a3[1][0] = 'Wajib dilengkapi radio portabel';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 12;item[nomorItem] = 'm. Lampu isyarat (Day light signal)';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 13;item[nomorItem] = 'n. Reflektor radar';a1[0] = 35;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 14;item[nomorItem] = 'o. Kode isyarat Internasional';a1[0] = 35;a2[0] = 'GT lebih besar dan sama dengan 35';a3[0] = [];a3[0][0] = 'Wajib dilengkapi minimum penandaan tanda bahaya';
a1[1] = 0;a2[1] = 'GT kurang dari 35';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];



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




		teks="<div style='font-size:10px'><i>Navigasi1D</i></div>"+teks;

                document.getElementById("demo").innerHTML = teks;


            }