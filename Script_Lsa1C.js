            function lsa1C() {
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
                var a3 = [["Dilengkapi rakit penolong kembung (Inflatable Life Raft) kategori C yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 6 klausul 6.3 dan 7.1 dengan kapasitas 125% total jumlah pelayar.", "Dilengkapi dengan 1 (satu) unit sekoci penyelamat kategori B yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 4 klausul 4.2 pada setiap sisinya."], ["Dilengkapi rakit penolong kembung (Inflatable Life Raft) kategori D yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 6 klausul 6.4 dan 7.1 dengan kapasitas tidak kurang dari 125% total jumlah pelayar.", "Dilengkapi dengan 1 (satu) unit sampan bermotor"], ["Dilengkapi rakit penolong kembung (Inflatable Life Raft) kategori D yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 6 klausul 6.4 dan 7.1 dengan kapasitas tidak kurang dari 125% total jumlah pelayar.", "Dilengkapi dengan 1 (satu) unit sampan bermotor"], ["Dilengkapi rakit penolong tegar (Rigid Life Raft) yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 6 klausul 6.5 atau alat apung yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 8 dengan kapasitas tidak kurang dari 125% total jumlah pelayar."], ["Alat apung sederhana yang dapat menampung 100% total jumlah pelayar."]];
                var i = -1;
                do {
                    i++;
                }
                while (gtKu < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 0

nomorItem = 1;item[nomorItem] = 'b. Sekoci penyelamat (rescue boat)';a1[0] = 0;a2[0] = 'Semua ukuran';a3[0] = [];a3[0][0] = 'Lihat ayat a. Sekoci dan rakit penolong';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 2;item[nomorItem] = 'c. Pelampung penolong';a1[0] = 240;a2[0] = '240 meter atau lebih';a3[0] = [];a3[0][0] = 'Di lengkapi penampung penolong sebanyak 30 unit, terdiri dari:';
a3[0][1]=[];a3[0][1][0] = 'Pelampung penolong yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 9 klausul 9.1.';
a3[0][1][1] = 'Paling sedikit 50% dilengkapi dengan lampu yang dapat menyala sendiri, 2 unit diantaranya dilengkapi dengan tabung (isyarat) asap oranye (MOB Buoy), 4 unit lainnya dilengkapi dengan tali apung.';
a1[1] = 180;a2[1] = '180 meter atau lebih tetapi kurang dari 240 meter';a3[1] = [];a3[1][0] = 'Di lengkapi penampung penolong sebanyak 24 unit, terdiri dari:';
a3[1][1]=[];a3[1][1][0] = 'Pelampung penolong yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 9 klausul 9.1';
a3[1][1][1] = 'Paling sedikit 50% dilengkapi dengan lampu yang dapat menyala sendiri, 2 unit diantaranya dilengkapi dengan tabung (isyarat) asap oranye (MOB Buoy), 4 unit lainnya dilengkapi dengan tali apung.';
a1[2] = 120;a2[2] = '120 meter atau lebih tetapi kurang dari 180 meter';a3[2] = [];a3[2][0] = 'Di lengkapi penampung penolong sebanyak 18 unit, terdiri dari:';
a3[2][1]=[];a3[2][1][0] = 'Pelampung penolong yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 9 klausul 9.1';
a3[2][1][1] = 'Paling sedikit 50% dilengkapi dengan lampu yang dapat menyala sendiri, 2 unit diantaranya dilengkapi dengan tabung (isyarat) asap oranye (MOB Buoy), 4 unit lainnya dilengkapi dengan tali apung.';
a1[3] = 60;a2[3] = '60 meter atau lebih tetapi kurang dari 120 meter';a3[3] = [];a3[3][0] = 'Di lengkapi penampung penolong sebanyak 12 unit, terdiri dari:';
a3[3][1]=[];a3[3][1][0] = 'Pelampung penolong yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 9 klausul 9.1';
a3[3][1][1] = 'Paling sedikit 50% dilengkapi dengan lampu yang dapat menyala sendiri, 2 unit diantaranya dilengkapi dengan tabung (isyarat) asap oranye (MOB Buoy), 2 unit lainnya dilengkapi dengan tali apung.';
a1[4] = 45;a2[4] = '45 meter atau lebih tetapi kurang dari dari 60 meter';a3[4] = [];a3[4][0] = 'Di lengkapi penampung penolong sebanyak 8 unit, terdiri dari:';
a3[4][1]=[];a3[4][1][0] = 'Pelampung penolong yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 9 klausul 9.1.';
a3[4][1][1] = 'Paling sedikit 50% dilengkapi dengan lampu yang dapat menyala sendiri, dan 2 unit lainnya dilengkapi dengan tali apung.';
a1[5] = 15;a2[5] = '15 meter atau lebih tetapi kurang dari dari 45 meter';a3[5] = [];a3[5][0] = 'Di lengkapi penampung penolong sebanyak 6 unit, terdiri dari:';
a3[5][1]=[];a3[5][1][0] = 'Pelampung penolong yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 9 klausul 9.1';
a3[5][1][1] = 'Paling sedikit 50% dilengkapi dengan lampu yang dapat menyala sendiri dan 2 unit lainnya dilengkapi dengan tali apung.';
a1[6] = 0;a2[6] = 'Kurang dari 15 meter';a3[6] = [];a3[6][0] = 'Di lengkapi penampung penolong sebanyak 4 unit, terdiri dari:';
a3[6][1]=[];a3[6][1][0] = 'Pelampung penolong yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 9 klausul 9.1';
a3[6][1][1] = 'Minimal 2 unitnya dilengkapi dengan tali apung.';i = -1; do { i++;} while (lKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 3;item[nomorItem] = 'd. Baju penolong';a1[0] = 0;a2[0] = 'Semua Ukuran';a3[0] = [];a3[0][0] = 'Baju penolong kategori B yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 10 klausul 10.2 yang dilengkapi lampu, peluit dan pita pemantul cahaya (retro-reflektor tape)';
a3[0][1] = 'Sejumlah 100% total jumlah pelayar untuk dewasa ditambah 5% cadangan.';
a3[0][2] = 'Sejumlah yang mencukupi untuk petugas jaga/pekerja di anjungan, ruang kendali kamar mesin dan ditempat kerja yang jauh dari akomodasi (apabila ada) dan';
a3[0][3] = 'Minimum 10% dari jumlah penumpang, untuk anak-anak.';i = -1; do { i++;} while (lKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 4;item[nomorItem] = 'e. Alat pelontar tali (line throwing apparatus)';a1[0] = 500;a2[0] = 'GT lebih besar atau sama dengan 500';a3[0] = [];a3[0][0] = 'Sarana pelontar tali yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 16 dengan 4 unit proyektil dan tali; ';
a1[1] = 300;a2[1] = 'GT 300 sampai dengan kurang dari 500';a3[1] = [];a3[1][0] = 'Sarana pelontar tali yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 16 dengan 3 unit proyektil dan tali;';
a1[2] = 175;a2[2] = 'GT 175 sampai dengan kurang dari 300';a3[2] = [];a3[2][0] = 'Sarana pelontar tali yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 16 dengan 2 unit proyektil dan tali;';
a1[3] = 0;a2[3] = 'GT kurang dari 175';a3[3] = [];a3[3][0] = 'Dilengkapi dengan 4 (empat) unit tali buangan dengan panjang 30 meter setiap unitnya.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 5;item[nomorItem] = 'f. Isyarat marabahaya (pyrotechnic)';a1[0] = 300;a2[0] = 'GT lebih besar atau sama dengan 300';a3[0] = [];a3[0][0] = '4 buah roket parasut isyarat marabahaya yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi13;';
a3[0][1] = '4 buah cerawat tangan merah yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 14; dan';
a3[0][2] = '2 buah tabung asap oranye yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 15;';
a1[1] = 35;a2[1] = 'GT 35 sampai dengan kurang dari 300';a3[1] = [];a3[1][0] = '2 buah roket parasut isyarat marabahaya yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 13;';
a3[1][1] = '4 buah cerawat tangan merah yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 14; dan';
a3[1][2] = '1 buah tabung asap oranye yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 15;';
a1[2] = 0;a2[2] = 'GT kurang dari 35';a3[2] = [];a3[2][0] = '4 buah roket parasut isyarat marabahaya yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab IV Seksi 13;';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 6;item[nomorItem] = 'g. Search and rescue radar transponder (SART)';a1[0] = 35;a2[0] = 'GT lebih besar dan sama dengan 35';a3[0] = [];a3[0][0] = 'Dilengkapi dengan 1 unit radar transponder yang memenuhi persyaratan Standar Kapal Non Konvensi Berbendera Indonesia Bab III Seksi 4 klausul 4.2.1.5';
a1[1] = 0;a2[1] = 'GT  kurang dari 35';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 7;item[nomorItem] = 'h. Two way radio telephony';a1[0] = 35;a2[0] = 'GT lebih besar dan sama dengan 35';a3[0] = [];a3[0][0] = 'Dilengkapi dengan 3 unit Two way VHF radio telephone yang memenuhi persyaratan Standar Kapal Non Konvensi Bab III Seksi 4 klausul 4.2.1.6.';
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




		teks="<div style='font-size:10px'><i>Lsa1C - Pasal 81</i></div>"+teks;

                document.getElementById("demo").innerHTML = teks;


            }