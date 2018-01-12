            function lsa2D() {
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
                item[nomorItem] = "a. Sekoci dan rakit penolong (life boat & life raft).";
                var a1 = [500, 300, 35, 7, 0];
                var a2 = ["GT lebih besar atau sama dengan 500", "GT 300 sampai dengan kurang dari 500", "GT 35 sampai dengan kurang dari 300", "GT 7 sampai dengan kurang dari 35", "GT kurang dari 7"];
                var a3 = [["Dilengkapi sekoci penolong kategori B yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 2 klausul 2.2 dengan kapasitas tidak kurang dari 37.5% total jumlah pelayar pada setiap sisi. Setengah dari jumlah sekoci yang ada ditiap sisi tersebut harus dilengkapi motor sebagai alat penggerak. atau", "Dilengkapi sekoci kategori B yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 2 klausul 2.2 dengan kapasitas tidak kurang dari 15% total jumlah pelayar pada setiap sisi. Setengah dari jumlah sekoci yang ada ditiap sisi tersebut harus dilengkapi motor sebagai alat penggerak dan ditambah rakit penolong kembung Kategori B di tiap sisi, dengan kapasitas tidak kurang dari 22.5% total jumlah pelayar pada tiap sisi.", "Sebagai tambahan, harus memiliki rakit penolong kembung (Inflatable Life Raft) kategori B yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 6 klausul 6.2 dan 7.1 dengan kapasitas 50% total jumlah pelayar.", "Dilengkapi dengan 1 buah sekoci penyelamat (Rescue boat) jika tidak ada sekoci penolong (Life boat) yang dapat berfungsi sebagai sekoci penyelamat (Rescue boat)."], ["Dilengkapi sekoci penolong kategori B yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 6 klausul 6.2 dengan kapasitas tidak kurang dari 37.5% total jumlah pelayar pada setiap sisi. Setengah dari jumlah sekoci yang ada di tiap sisi tersebut harus dilengkapi motor sebagai alat penggerak, atau", "Dilengkapi sekoci kategori B yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 2 klausul 2.2 dengan kapasitas tidak kurang dari 15% total jumlah pelayar pada setiap sisi. Setengah dari jumlah sekoci yang ada ditiap sisi tersebut harus dilengkapi motor sebagai alat penggerak dan ditambah rakit penolong kembung Kategori C di tiap sisi, dengan kapasitas tidak kurang dari 22.5% total jumlah pelayar pada tiap sisi.", "Sebagai tambahan, harus memiliki rakit penolong kembung (Inflatable Life Raft) kategori C yang memenuhi persyaratan dokumen Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 6.3 dan 7.2 dengan kapasitas 50% total jumlah pelayar.", "Dilengkapi dengan 1 buah sekoci penyelamat (Rescue boat) jika tidak ada sekoci penolong (Life boat) yang dapat berfungsi sebagai sekoci penyelamat (Rescue boat)."], ["Dilengkapi rakit penolong kembung (Inflatable Life Raft) kategori B yang memenuhi persyaratan dokumen Standar Kapal Non Konvensi Berbendera Indonesia Bab IV seksi 6.2 dan 7.1 dengan kapasitas tidak kurang dari 125% total jumlah pelayar.", "Dilengkapi dengan 1 (satu) unit sampan bermotor"], ["Dilengkapi rakit penolong tegar (Rigid Life Raft) yang memenuhi persyaratan dokumen Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 6.5 atau alat apung yang memenuhi persyaratan dokumen Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 8 dengan kapasitas tidak kurang dari 125% total jumlah pelayar."], ["Dilengkapi rakit penolong tegar (Rigid Life Raft) atau yang sepadan yang dapat menampung 100% total jumlah pelayar."]];
                var i = -1;
                do {
                    i++;
                }
                while (gtKu < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 0

nomorItem = 0;item[nomorItem] = 'a. Sekoci dan rakit penolong (lifeboat & Life Raft).';a1[0] = 85;a2[0] = 'Panjang lebih besar atau sama dengan 85 meter';a3[0] = [];a3[0][0] = 'Rakit penolong kembung (Inflatable Life Raft) kategori C yang memenuhi Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 6 klausul 6.3 dan 7.1 dengan kapasitas 100% total jumlah pelayar yang dapat dipindah-pindahkan dari satu sisi kesisi lainnya; atau Rakit penolong kembung (Inflatable Life Raft) kategori C yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 6 klausul 6.3 dan 7.1 dengan kapasitas 100% total jumlah pelayar pada setiap sisi kapal.';
a3[0][1] = 'Dilengkapi dengan 1 unit sampan bermotor (working boat).';
a1[1] = 35;a2[1] = 'Panjang 35 meter atau lebih tetapi kurang dari 85 meter';a3[1] = [];a3[1][0] = 'Rakit penolong kembung (Inflatable Life Raft) kategori D yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 6 klausul 6.4 dan 7.1 dengan kapasitas 100% total jumlah pelayar yang dapat dipindah-pindahkan dari satu sisi kesisi lainnya; atau Rakit penolong kembung (Inflatable Life Raft) kategori D yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 6 klausul 6.4 dan 7.1 dengan kapasitas 100% total jumlah pelayar pada setiap sisi kapal.';
a3[1][1] = 'Dilengkapi dengan 1 unit sampan';
a1[2] = 20;a2[2] = 'Panjang 20 sampai dengan kurang dari 35';a3[2] = [];a3[2][0] = 'Dilengkapi rakit penolong tegar (Rigid Life Raft) yang memenuhi persyaratan Standar Kapal Non Konvensi Bab IV Seksi 6 klausul6.5 atau alat apung yang memenuhi persyaratan Bab IV seksi 8 dengan kapasitas tidak kurang dari 125% total jumlah pelayar.';
a1[3] = 10;a2[3] = 'Panjang 10 sampai dengan kurang dari 20 meter';a3[3] = [];a3[3][0] = 'Dilengkapi rakit penolong tegar (Rigid Life Raft) yang memenuhi persyaratan Standar Kapal Non Konvensi Bab IV Seksi 6 klausul6.5 atau alat apung yang memenuhi persyaratan Standar Kapal Non Konvensi Bab IV Seksi 8 dengan kapasitas tidak kurang dari 100% total jumlah pelayar.';
a1[4] = 0;a2[4] = 'Panjang kurang dari 10 meter (GT kurang dari 7)';a3[4] = [];a3[4][0] = 'Alat apung sederhana yang dapat menampung 100% total jumlah pelayar.';i = -1; do { i++;} while (lKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 1;item[nomorItem] = 'b. Sekoci penyelamat (rescue boat)';a1[0] = 0;a2[0] = 'Semua Ukuran';a3[0] = [];a3[0][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 2;item[nomorItem] = 'c. Pelampung penolong';a1[0] = 150;a2[0] = '150 meter atau lebih';a3[0] = [];a3[0][0] = 'Di lengkapi penampung penolong sebanyak 14 unit, terdiri dari:';
a3[0][1]=[];a3[0][1][0] = 'Pelampung penolong yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 9 klausul 9.1.';
a3[0][1][1] = 'Paling sedikit 50% dilengkapi dengan lampu yang dapat menyala sendiri, 4 unit lainnya dilengkapi dengan tali apung.';
a1[1] = 100;a2[1] = '100 meter atau lebih tetapi kurang dari 150 meter';a3[1] = [];a3[1][0] = 'Di lengkapi penampung penolong sebanyak 10 unit, terdiri dari:';
a3[1][1]=[];a3[1][1][0] = 'Pelampung penolong yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 9 klausul 9.1.';
a3[1][1][1] = 'Paling sedikit 50% dilengkapi dengan lampu yang dapat menyala sendiri, 4 unit lainnya dilengkapi dengan tali apung.';
a1[2] = 60;a2[2] = '60 meter atau lebih tetapi kurang dari 100 meter';a3[2] = [];a3[2][0] = 'Di lengkapi penampung penolong sebanyak 8 unit, terdiri dari:';
a3[2][1]=[];a3[2][1][0] = 'Pelampung penolong yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 9 klausul 9.1.';
a3[2][1][1] = 'Paling sedikit 50% dilengkapi dengan lampu yang dapat menyala sendiri, 4 unit lainnya dilengkapi dengan tali apung.';
a1[3] = 30;a2[3] = '30 meter atau lebih tetapi kurang dari 60 meter';a3[3] = [];a3[3][0] = 'Di lengkapi penampung penolong sebanyak 6 unit, terdiri dari:';
a3[3][1]=[];a3[3][1][0] = 'Pelampung penolong yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 9 klausul 9.1.';
a3[3][1][1] = 'Paling sedikit 50% dilengkapi dengan lampu yang dapat menyala sendiri, 2 unit lainnya dilengkapi dengan tali apung.';
a1[4] = 10;a2[4] = '10 meter atau lebih tetapi kurang dari 30 meter';a3[4] = [];a3[4][0] = 'Di lengkapi penampung penolong sebanyak 4 unit, terdiri dari:';
a3[4][1]=[];a3[4][1][0] = 'Pelampung penolong yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 9 klausul 9.1.';
a3[4][1][1] = 'Minimal 2 unitnya dilengkapi dengan tali apung.';
a1[5] = 0;a2[5] = 'Kurang dari 10 meter';a3[5] = [];a3[5][0] = 'Di lengkapi penampung penolong sebanyak 2 unit, terdiri dari:';
a3[5][1]=[];a3[5][1][0] = 'Alat apung tiup, diwarnai dengan warna yang menyolok (orange), dan diberi nama kapal.';i = -1; do { i++;} while (lKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 3;item[nomorItem] = 'd. Baju penolong';a1[0] = 0;a2[0] = 'Semua Ukuran';a3[0] = [];a3[0][0] = 'Baju penolong kategori C yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 10 klausul 10.3 yang dilengkapi lampu, peluit dan pita pemantul cahaya (retro-reflektor tape) sejumlah 100% total jumlah pelayar.';
a3[0][1] = 'Ditambah sejumlah yang mencukupi untuk petugas jaga/pekerja di anjungan, ruang kendali kamar mesin dan ditempat kerja yang jauh dari akomodasi (apabila ada).';i = -1; do { i++;} while (lKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 4;item[nomorItem] = 'e. Alat pelontar tali (line throwing apparatus)';a1[0] = 500;a2[0] = 'GT lebih besar sama dengan 500';a3[0] = [];a3[0][0] = 'Belum diatur di dalam NCVS';
a1[1] = 300;a2[1] = 'GT 300 sampai dengan kurang dari 500';a3[1] = [];a3[1][0] = '4 unit,Tali buangan dengan panjang 30 meter';
a1[2] = 35;a2[2] = 'GT 35 sampai dengan kurang dari 300';a3[2] = [];a3[2][0] = '2 unit,Tali buangan dengan panjang 30 meter.';
a1[3] = 0;a2[3] = 'GT kurang dari 35';a3[3] = [];a3[3][0] = '1 unit,Tali buangan dengan panjang 20 meter .';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 5;item[nomorItem] = 'f. Isyarat marabahaya (pyrotechnic)';a1[0] = 500;a2[0] = 'GT lebih besar sama dengan 500';a3[0] = [];a3[0][0] = 'Belum diatur di dalam NCVS';
a1[1] = 300;a2[1] = 'GT 300 sampai dengan kurang dari 500';a3[1] = [];a3[1][0] = '4 buah cerawat tangan merah yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 14; dan';
a1[2] = 35;a2[2] = 'GT 35 sampai dengan kurang dari 300';a3[2] = [];a3[2][0] = '2 buah cerawat tangan merah yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 14; dan';
a1[3] = 0;a2[3] = 'GT kurang dari 35';a3[3] = [];a3[3][0] = '2 buah roket parasut isyarat marabahaya yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 13.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 6;item[nomorItem] = 'g. Search and rescue radar transponder (SART)';a1[0] = 0;a2[0] = 'Semua Ukuran';a3[0] = [];a3[0][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 7;item[nomorItem] = 'h. Two way radio telephony';a1[0] = 0;a2[0] = 'Semua Ukuran';a3[0] = [];a3[0][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

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




		teks="<div style='font-size:10px'><i>Lsa2D</i></div>"+teks;

                document.getElementById("demo").innerHTML = teks;


            }