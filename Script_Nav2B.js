            function nav2B() {
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
                var a3 = [["Wajib dilengkapi dengan 1 (satu) unit yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 5 klausul 5.7 ditambah 1 (satu) unit pedoman magnet cadangan yang siap digunakan setiap saat."], ["Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 5 klausul 5.7"], ["Minimal menggunakan pedoman magnet tangan (portabel)."]];
                var i = -1;
                do {
                    i++;
                }
                while (gtKu < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 0

nomorItem = 0;item[nomorItem] = 'a. Pedoman magnet';a1[0] = 35;a2[0] = 'GT lebih besar dari 35';a3[0] = [];a3[0][0] = 'Wajib dilengkapi dengan 1 (satu) unit yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 5 klausul 5.7 ditambah 1 (satu) unit pedoman magnet cadangan yang siap digunakan setiap saat.';
a1[1] = 7;a2[1] = 'GT 7 sampai dengan kurang dari 35';a3[1] = [];a3[1][0] = 'Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 5 klausul 5.7';
a1[2] = 0;a2[2] = 'GT kurang dari 7';a3[2] = [];a3[2][0] = 'Minimal menggunakan pedoman magnet tangan (portabel).';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 1;item[nomorItem] = 'b. Pedoman gasing';a1[0] = 500;a2[0] = 'GT lebih besar atau sama dengan 500';a3[0] = [];a3[0][0] = 'Wajib dilengkapi dengan 1 (satu) unit yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonsia Bab III Seksi 5 klausul 5.8';
a1[1] = 0;a2[1] = 'GT kurang dari 500';a3[1] = [];a3[1][0] = 'Tidak diwajibkan.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 2;item[nomorItem] = 'c. Sistem kendali haluan atau lintasan (Heading or track control system (auto pilot))';a1[0] = 10000;a2[0] = 'GT lebih besar dan sama dengan 10.000';a3[0] = [];a3[0][0] = 'Wajib dilengkapi';
a1[1] = 0;a2[1] = 'GT kurang dari 10.000';a3[1] = [];a3[1][0] = 'Tidak diwajibkan.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 3;item[nomorItem] = 'd. Pelorus atau alat baring pedoman (Pelorus or Compass Bearing Device)';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Wajib dilengkapi';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 4;item[nomorItem] = 'e. Alat koreksi haluan dan baringan (Daftar deviasi)';a1[0] = 35;a2[0] = 'GT lebih besar dan sama dengan 35';a3[0] = [];a3[0][0] = 'Wajib dilengkapi. Catatan : Semua kompas magnet sebelum digunakan dan yang baru selesai melaksanakan pengeringan (dry docking) wajib di timbal.';
a1[1] = 0;a2[1] = 'GT dibawah 35';a3[1] = [];a3[1][0] = 'Tidak diwajibkan.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 5;item[nomorItem] = 'f. Alat pancar petunjuk haluan (Transmitting Heading Device)';a1[0] = 500;a2[0] = 'GT lebih besar dan sama dengan 500';a3[0] = [];a3[0][0] = 'Wajib dilengkapi. ';
a1[1] = 0;a2[1] = 'GT kurang dari 500';a3[1] = [];a3[1][0] = 'Tidak diwajibkan.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 6;item[nomorItem] = 'g. Peta laut/sistem peraga peta dan informasi elektronik';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Wajib dilengkapi peta laut yang sesuai dengan daerah pelayarannya, atau dapat diganti dengan peralatan eletronik peta (ECDIS) lengkap dengan penataan cadangannya.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 7;item[nomorItem] = 'h. Publikasi nautika';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Wajib dilengkapi publikasi nautika yang sesuai dengan daerah pelayarannya.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 8;item[nomorItem] = 'i. Alat penerima sistem satelit navigasi (GPS)';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Wajib dilengkapi';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 9;item[nomorItem] = 'j. Radar';a1[0] = 300;a2[0] = 'GT lebih besar dan sama dengan 300';a3[0] = [];a3[0][0] = 'Wajib dilengkapi radar 9 GHz yang minimal memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 5 klausul 5.9.1';
a1[1] = 0;a2[1] = 'GT kurang dari 300';a3[1] = [];a3[1][0] = 'Tidak diwajibkan.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 10;item[nomorItem] = 'k. Radar 3 GHz (Kedua)';a1[0] = 3000;a2[0] = 'GT lebih besar dan sama dengan 3.000';a3[0] = [];a3[0][0] = 'Wajib dilengkapi radar kedua 3 GHz yang minimal memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 5 klausul 5.9.1 atau dapat menggunakan radar 9 GHz sebagai pengganti radar 3 GHz dengan seijin Direktur Jenderal Perhubungan Laut.';
a1[1] = 0;a2[1] = 'GT kurang dari 3.000';a3[1] = [];a3[1][0] = 'Tidak diwajibkan.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 11;item[nomorItem] = 'l. Alat bantu ploting radar otomatis (ARPA)';a1[0] = 10000;a2[0] = 'GT lebih besar dan sama dengan 10.000';a3[0] = [];a3[0][0] = 'Wajib dilengkapi 1 (satu) unit ARPA yang minimal memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 5 klausul 5.9.2';
a1[1] = 0;a2[1] = 'GT kurang dari 10.000';a3[1] = [];a3[1][0] = 'Tidak diwajibkan.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 12;item[nomorItem] = 'm. Alat bantu garis haluan otomatis (Automatic tracking aid)';a1[0] = 500;a2[0] = 'GT lebih besar dan sama dengan 500';a3[0] = [];a3[0][0] = 'Wajib dilengkapi';
a1[1] = 0;a2[1] = 'GT kurang dari 500';a3[1] = [];a3[1][0] = 'Tidak diwajibkan.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 13;item[nomorItem] = 'n. Alat bantu ploting elektronik';a1[0] = 300;a2[0] = 'GT lebih besar dan sama dengan 300';a3[0] = [];a3[0][0] = 'Wajib dilengkapi ';
a1[1] = 0;a2[1] = 'GT kurang dari 300';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 14;item[nomorItem] = 'o. Sistem identifikasi otomatis (AIS)';a1[0] = 300;a2[0] = 'GT lebih besar dan sama dengan 300';a3[0] = [];a3[0][0] = 'Wajib dilengkapi 1 (satu) unit yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 5 klausul. 5.11';
a1[1] = 0;a2[1] = 'GT kurang dari 300';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 15;item[nomorItem] = 'p. Perekam data pelayaran (VDR)';a1[0] = 3000;a2[0] = 'GT lebih besar atau sama dengan 3000';a3[0] = [];a3[0][0] = 'Wajib dilengkapi 1 (satu) unit yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 5 klausul 5.10';
a1[1] = 0;a2[1] = 'GT kurang dari 3000';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 16;item[nomorItem] = 'q. Alat ukur kecepatan';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Wajib dilengkapi';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 17;item[nomorItem] = 'r. Perum gema (echo sounding device)';a1[0] = 300;a2[0] = 'GT lebih besar dan sama dengan 300';a3[0] = [];a3[0][0] = 'Wajib dilengkapi dengan perangkat elektronik perum gema Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 17 klausul 17.5. ';
a1[1] = 0;a2[1] = 'GT kurang dari 300';a3[1] = [];a3[1][0] = 'Wajib dilengkapi dengan perum tangan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 18;item[nomorItem] = 's. Indikator sudut daun kemudi, putaran baling-baling, kisar dan mode operasi baling – baling, arah daya dorong.';a1[0] = 500;a2[0] = 'GT lebih besar dan sama dengan 500';a3[0] = [];a3[0][0] = 'Wajib dilengkapi';
a1[1] = 0;a2[1] = 'GT kurang dari 500';a3[1] = [];a3[1][0] = 'Tidak diwajibkan, catatan:';
a3[1][1]=[];a3[1][1][0] = 'Untuk semua ukuran kapal indikator sudut daun kemudi diwajibkan.';
a3[1][1][1] = 'Untuk tipe CPP : kisar dan mode operasi baling – baling, diwajibkan.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 19;item[nomorItem] = 't. Corong pemberitahuan (Public addressor)';a1[0] = 35;a2[0] = 'GT lebih besar dan sama dengan 35';a3[0] = [];a3[0][0] = 'Wajib dilengkapi yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 12.';
a1[1] = 0;a2[1] = 'GT kurang dari 35';a3[1] = [];a3[1][0] = 'Wajib dilengkapi dengan pengeras suara portabel';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 20;item[nomorItem] = 'u. Alat komunikasi ke tempat pengemudian darurat';a1[0] = 300;a2[0] = 'GT lebih besar dan sama dengan 300';a3[0] = [];a3[0][0] = 'Wajib dilengkapi';
a1[1] = 35;a2[1] = 'GT 35 sampai dengan kurang dari 300';a3[1] = [];a3[1][0] = 'Wajib dilengkapi handy talkie';
a1[2] = 0;a2[2] = 'GT kurang dari 35';a3[2] = [];a3[2][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 21;item[nomorItem] = 'v. Lampu isyarat (Day light signal)';a1[0] = 35;a2[0] = 'GT lebih besar dan sama dengan 35';a3[0] = [];a3[0][0] = 'Wajib dilengkapi lampu isyarat siang hari yang terpisah dari lampu pencarian (search light).';
a1[1] = 0;a2[1] = 'GT kurang dari 35';a3[1] = [];a3[1][0] = 'Wajib dilengkapi minimal dengan lampu senter';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 22;item[nomorItem] = 'w. Reflektor radar';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Wajib dilengkapi';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 23;item[nomorItem] = 'x. Kode isyarat Internasional';a1[0] = 35;a2[0] = 'GT lebih besar dan sama dengan 35';a3[0] = [];a3[0][0] = 'Wajib dilengkapi sesuai keperluan kapal.';
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




		teks="<div style='font-size:10px'><i>Navigasi2B</i></div>"+teks;

                document.getElementById("demo").innerHTML = teks;


            }