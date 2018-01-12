            function pemadam2B() {
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
                var a3 = [["Harus dipasang tombol alarm kebakaran manual ditiap-tiap dek di dalam akomodasi dan ruang layanan ditempat yang mudah ditemukan dan dijangkau.", "Harus dipasang alarm khusus yang dioperasikan dari anjungan navigasi atau stasiun kendali kebakaran untuk memanggil awak kapal. Alarm ini dapat merupakan bagian dari sistem alarm umum kapal, tapi alarm demikian harus dapat dibunyikan secara terpisah ke ruang-ruang penumpang.", "Harus dipasang suatu sistem pemberitahuan umum (public address system) atau sarana komunikasi lain yang efektif di seluruh akomodasi, ruang layanan dan stasiun kendali kebakaran."], ["Wajib dilengkapi dengan penandaan lain (lihat persyaratan untuk panjang 25 meter ke atas)"]];

                var i = -1;
                do {
                    i++;
                }
                while (lKu < a1[i]);
                batasan[nomorItem] = a2[i];
                persyaratan[nomorItem] = a3[i];
                //akhir item 0

                nomorItem = 1;item[nomorItem] = 'b. Pompa utama pemadam kebakaran';a1[0] = 1000;a2[0] = 'GT lebih besar atau sama dengan 1.000';a3[0] = [];a3[0][0] = 'Wajib dilengkapi minimum 2 (dua) unit pompa pemadam kebakaran utama dengan kapasitas tiap pompa tidak kurang tidak kurang dari 2/3 kapasitas pompa-pompa bilga yang dipersyaratkan.';
a3[0][1] = 'Tiap pompa pemadam kebakaran utama harus dapat menghasilkan pancaran air secara serentak melalui 2 hidran dengan tekanan minimum sebagai berikut:';
a3[0][2]=[];a3[0][2][0] = 'GT sama dengan atau lebih besar dari 6000 tekanan minimum = 0.31 N/mm2';
a3[0][2][1] = 'GT kurang dari 6000 tekanan minimum = 0.25 N/mm2';
a1[1] = 500;a2[1] = 'GT 500 sampai dengan kurang dari 1000';a3[1] = [];a3[1][0] = 'Wajib dilengkapi minimum 2 (dua) unit pompa pemadam kebakaran utama dengan kapasitas tiap pompa tidak kurang tidak kurang dari 2/3 kapasitas pompa-pompa bilga yang dipersyaratkan.';
a3[1][1] = 'Tiap pompa kebakaran utama harus dapat mengahasilkan satu pancaran air melalui tiap hidran dengan tekanan minimum 0,20 N/mm2';
a1[2] = 50;a2[2] = 'GT 50 sampai dengan kurang dari 500';a3[2] = [];a3[2][0] = 'Wajib dilengkapi minimum 1 (satu) unit pompa pemadam kebakaran utama dengan kapasitas tiap pompa tidak kurang tidak kurang dari 2/3 kapasitas pompa-pompa bilga yang dipersyaratkan., harus dapat menghasilkan satu pancaran air melalui tiap nosel dengan tekanan minimum 0,20 N/mm2';
a1[3] = 35;a2[3] = 'GT 35 sampai dengan kurang dari 50';a3[3] = [];a3[3][1] = 'Wajib dilengkapi minimum 1 (satu) unit pompa pemadam kebakaran portabel dengan tenaga penggerak yang dapat menghasilkan pancaran air melalui nosel dengan diameter 10 mm sejauh 6 m';
a1[4] = 0;a2[4] = 'GT kurang dari 35';a3[4] = [];a3[4][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 2;item[nomorItem] = 'c. Pompa pemadam kebakaran darurat';a1[0] = 500;a2[0] = 'GT lebih besar atau sama dengan 500';a3[0] = [];a3[0][0] = 'Bila kebakaran dapat menyebabkan semua pompa kebakaran utama tidak berfungsi, maka perlu dipasang 1 pompa pemadam kebakaran darurat tetap dengan tenaga penggerak (power driven) di luar kompartemen dimana pompa – pompa kebakaran utama berada.';
a3[0][1] = 'Pompa kebakaran darurat tetap dengan tenaga penggerak (power driven) harus dapat mengahasilkan sekurang - sekurangnya satu pancaran air dari tiap hidran, slang atau nosel dimana tekanan dari tiap hidran dipertahankan sekurang – kurangnya 0,20 N/mm2';
a3[0][2] = 'Kapal dengan GT kurang dari 1.000, dapat digunakan pompa pemadam kebakaran portabel dengan tenaga penggerak (power driven) sebagai pompa kebakaran darurat dan harus menghasilkan satu pancaran air dari tiap slang dan nosel dengan mempertahankan tekanan 0,20 N/mm2';
a1[1] = 50;a2[1] = 'GT 50 sampai dengan kurang dari 500';a3[1] = [];a3[1][0] = 'Bila pompa pemadam kebakaran utama, sumber dayanya dan saluran masuk air laut tidak ditempatkan di luar kompartemen yang berisi mesin pembakaran dalam penggerak kapal atau ketel uap maka pompa pemadam kebakaran darurat yang dioperasikan secara manual dipasang di luar kompartemen';
a1[2] = 0;a2[2] = 'GT kurang dari 50';a3[2] = [];a3[2][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 3;item[nomorItem] = 'd. Hidran, slang dan nosel pemadam kebakaran.';a1[0] = 50;a2[0] = 'GT sama dengan atau lebih besar dari 50';a3[0] = [];a3[0][0] = 'Wajib dilengkapi minimum 2 (dua) buah ditambah 1 (satu) buah setiap kelebihan dari kelipatan 25 m panjang kapal.';
a3[0][1] = 'Ruang permesinan wajib dilengkapi Minimum minimum 1 (satu) buah, dilengkapi dengan nosel tipe dual purpose (pancar dan semprot).';
a1[1] = 0;a2[1] = 'GT kurang dari 50';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 4;item[nomorItem] = 'e. Sistem springkler (water sprinkler system)';a1[0] = 175;a2[0] = 'GT sama dengan atau lebih besar dari 175';a3[0] = [];a3[0][0] = 'Wajib dilengkapi di akomodasi, ruang muatan dan geladak kendaraan.';
a1[1] = 0;a2[1] = 'GT kurang dari 175';a3[1] = [];a3[1][0] = 'Tidak diwajibkan.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 5;item[nomorItem] = 'f. Alat pendeteksi kebakaran';a1[0] = 500;a2[0] = 'GT lebih besar dan sama dengan 500';a3[0] = [];a3[0][0] = 'Wajib dilengkapi di ruang tangga, koridor dan jalur penyelamatan diri pada ruang akomodasi, ruang permesinan yang tidak dijaga, ruang-ruang tertutup lainnya yang rentan terhadap kebakaran';
a1[1] = 175;a2[1] = 'GT 175 sampai dengan kurang dari 500';a3[1] = [];a3[1][0] = 'Wajib dilengkapi dengan alat detektor lokal (menggunakan battery) di ruang akomodasi.';
a1[2] = 0;a2[2] = 'GT kurang dari 175';a3[2] = [];a3[2][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 6;item[nomorItem] = 'g. Sistem alarm kebakaran';a1[0] = 175;a2[0] = 'GT lebih besar dan sama dengan 175';a3[0] = [];a3[0][0] = 'Wajib dilengkapi di ruang akomodasi, ruang muatan dan ruang mesin.';
a1[1] = 0;a2[1] = 'GT kurang dari 175';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 7;item[nomorItem] = 'h. Instalasi pemadam kebakaran tetap di ruang permesinan.';a1[0] = 375;a2[0] = 'Daya mesin sama dengan atau lebih besar dari 375 kW';a3[0] = [];a3[0][0] = 'Di ruang permesinan Wajib dilengkapi dengan salah satu dari :';
a3[0][1]=[];a3[0][1][0] = '(1) CO2';
a3[0][1][1] = '(2) Busa tekanan tinggi';
a3[0][1][2] = '(3) Air pancar (water fog)';
a1[1] = 0;a2[1] = 'Daya mesin kurang dari 375 kW';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (kwKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 8;item[nomorItem] = 'i. Instalasi pemadam kebakaran tetap di ruang muat';a1[0] = 2000;a2[0] = 'GT sama dengan atau lebih besar dari 2.000';a3[0] = [];a3[0][0] = 'Wajib dilengkapi dengan CO2 sistem atau;';
a3[0][1] = 'Busa tekanan tinggi';
a1[1] = 0;a2[1] = 'GT kurang dari 2000';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 9;item[nomorItem] = 'j. Perangkat pemadam busa dan CO2 bukan portabel di kamar mesin.';a1[0] = 375;a2[0] = 'Daya mesin sama dengan atau lebih besar dari 375 kW';a3[0] = [];a3[0][0] = 'Tiap ruangan yang berisikan permesinan pembakaran dalam yang digunakan untuk penggerak utama, atau yang memiliki total tenaga tidak kurang dari 375 kW untuk mesin bantu harus dilengkapi dengan : 1 (satu) tabung pemadam busa kapasitas 45 liter atau jenis lain yang setara.';
a1[1] = 0;a2[1] = 'Daya mesin kurang dari 375 kW';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (kwKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 10;item[nomorItem] = 'k. Perangkat pemadam busa dan CO2 bukan portabel di boiler room (ruang ketel)';a1[0] = 175;a2[0] = 'Daya ketel sama dengan atau lebih besar dari 175 kW.';a3[0] = [];a3[0][0] = 'Jika kapal dilengkapi boiler, maka di boiler room (ruang ketel) dilengkapi dengan 1 (satu) tabung pemadam busa kapasitas 135 liter atau jenis lain yang setara.';
a1[1] = 0;a2[1] = 'Daya ketel kurang dari 175 kW';a3[1] = [];a3[1][0] = 'Tidak diwajibkan.';i = -1; do { i++;} while (kwBoilerku< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 11;item[nomorItem] = 'l. perangkat pemadam kebakaran api portabel.';a1[0] = 50;a2[0] = '50 meter atau lebih';a3[0] = [];a3[0][0] = '2 (dua) unit dry chemical kapasitas 4.5 kg di tiap geladak untuk ruang akomodasi dan ruang layanan setiap antara dinding kedap air dan dinding zona kebakaran.';
a3[0][1] = '1 (satu) unit dry chemical kapasitas 4.5 kg di dapur yang luas geladaknya lebih kecil dan sama dengan 15 m2 dan 2 (dua) unit untuk ruang yang lebih besar';
a3[0][2] = '1 (satu) unit CO2 kapasitas 6,8 kg di stasiun kendali anjungan.';
a3[0][3] = '2 (dua) unit Foam masing - masing 9 liter yang sesuai untuk memadamkan kebakaran minyak pada ruang ketel.';
a3[0][4] = 'Ruang permesinan dilengkapi minimum 2 (dua) unit terdiri dari 1 (satu) unit foam 9 liter dan 1 (satu) unit CO2 6,8 kg dan tidak lebih dari 6 (enam)';
a3[0][5] = 'Ruang layanan lainnya minimum 1 (satu) unit dry chemical masing - masing 4,5 kg';
a1[1] = 25;a2[1] = 'Panjang 25 meter atau lebih dan kurang dari 50 meter';a3[1] = [];a3[1][0] = '1 (satu) unit dry chemical kapasitas 4.5 kg untuk tiap ruang penumpang dan ruang ABK di tiap geladak.';
a3[1][1] = '1 (satu) unit dry chemical kapasitas 4.5 kg di dapur';
a3[1][2] = '2 (dua) unit tabung pemadam di ruang permesinan yang terdiri dari 1 (satu) unit foam 9 liter dan 1 (satu) unit CO2 6,8 kg';
a3[1][3] = 'Ruang layanan lainnya minimum 1 (satu) unit dry chemical masing - masing 4.5 kg';
a1[2] = 0;a2[2] = 'kurang dari 25 meter';a3[2] = [];a3[2][0] = '1 (satu) unit unit dry chemical kapasitas 4,5 kg untuk tiap ruang penumpang dan ruang ABK di tiap geladak';
a3[2][1] = '1 (satu) unit dry chemical kapasitas 4,5 kg di dapur';
a3[2][2] = '1 (satu) unit tabung pemadam dry powder 4.5 kg di ruang permesinan, apabila tidak memungkinkan dapat ditempatkan di luar kamar mesin.';i = -1; do { i++;} while (lKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 12;item[nomorItem] = 'm. Pasir.';a1[0] = 175;a2[0] = 'Daya ketel sama dengan atau lebih besar dari 175 kW';a3[0] = [];a3[0][0] = 'Wajib dilengkapi dengan 0.5 m3 dan 1 (satu) sekop';
a1[1] = 0;a2[1] = 'Daya ketel kurang 175 kW';a3[1] = [];a3[1][0] = 'Wajib dilengkapi dengan 0.25 m3 dan 1 (satu) sekop';i = -1; do { i++;} while (kwBoilerku< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 13;item[nomorItem] = 'n. Selimut pemadam kebakaran.';a1[0] = 175;a2[0] = 'GT sama dengan atau lebih besar dari 175';a3[0] = [];a3[0][0] = 'Setiap dapur dilengkapi dengan 1 (satu) unit selimut pemadam kebakaran.';
a1[1] = 35;a2[1] = 'GT sama dengan 35 sampai dengan kurang dari 175';a3[1] = [];a3[1][0] = 'Setiap dapur dilengkapi dengan minimal 4 (empat) unit karung goni yang siap dibasahkan.';
a1[2] = 0;a2[2] = 'GT kurang dari 35';a3[2] = [];a3[2][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 14;item[nomorItem] = 'o. Perlengkapan petugas pemadam.';a1[0] = 50;a2[0] = '50 meter atau lebih';a3[0] = [];a3[0][0] = 'Wajib dilengkapi 2 (dua) set (perlengkapan petugas dan alat pernafasan).';
a3[0][1] = 'Disamping itu harus disediakan tambahan 2 (dua) tabung cadangan alat bantu pernapasan.';
a1[1] = 25;a2[1] = '25 atau lebih dan kurang dari 50 meter';a3[1] = [];a3[1][0] = 'Dalam Juknis NCVS belum di atur. Aturan yang diterapkan berikut ini merupakan aturan perlengkapan petugas pemadam khusus daerah Pelayaran Kawasan Indonesia. Adapun isi aturan tersebut adalah  perlengkapan petugas pemadam wajib dilengkapi 1 (satu) set dan 1 (satu) tabung cadangan alat bantu pernapasan.';
a1[2] = 0;a2[2] = 'Kurang dari 25 meter';a3[2] = [];a3[2][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (lKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 15;item[nomorItem] = 'p. Sambungan darat Internasional.';a1[0] = 175;a2[0] = 'GT lebih besar dan sama dengan 175';a3[0] = [];a3[0][0] = 'Dilengkapi 1 (satu) unit sambungan darat Internasional, yang diberi tanda dan ditempatkan di tempat yang aman dan mudah dilihat.';
a1[1] = 0;a2[1] = 'GT kurang dari 175';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
nomorItem = 16;item[nomorItem] = 'q. Alat bantu pernafasan untuk meloloskan diri (EEBD).';a1[0] = 500;a2[0] = 'GT lebih besar dan sama dengan 500';a3[0] = [];a3[0][0] = 'Dilengkapi 2 (dua) unit alat bantu pernafasan untuk meloloskan diri di ruang akomodasi/penumpang, ruang permesinan pada setiap dek dan ruang pengendalian di anjungan. Alat tersebut ditempatkan ditempat yang aman dan hanya digunakan apabila diperlukan.';
a1[1] = 175;a2[1] = 'GT 175 sampai dengan kurang dari 500';a3[1] = [];a3[1][0] = 'Dilengkapi 1 (satu) unit alat bantu pernafasan untuk meloloskan diri di ruang akomodasi/penumpang. Alat tersebut ditempatkan ditempat yang aman dan hanya digunakan apabila diperlukan.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];
a1[2] = 0;a2[2] = 'GT kurang dari 175';a3[2] = [];a3[2][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 17;item[nomorItem] = 'r. Rute untuk meloloskan diri (Escape route).';a1[0] = 0;a2[0] = 'Semua kapal';a3[0] = [];a3[0][0] = 'Setiap ruangan akomodasi dan ruang permesinan wajib memiliki rute meloloskan diri dalam keadaan darurat.';
a3[0][1] = 'Setiap ruang akomodasi wajib diberikan informasi posisi keberadaan dan jalur terdekat untuk meloloskan diri dalam bentuk peta yang mudah dimengerti oleh penumpang.';
a3[0][2] = 'Jalur meloloskan diri harus diberi tanda, stiker reflector yang dapat membantu untuk melarikan diri pada saat lampu padam.';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 18;item[nomorItem] = 's. Bagan pengendali kebakaran (Fire control plan)';a1[0] = 100;a2[0] = 'GT lebih besar dan sama dengan 100';a3[0] = [];a3[0][0] = 'Bagan pengendali kebakaran yang telah dikukuhkan oleh pejabat yang berwenang wajib dipasang di dinding interior kapal yang mudah dilihat.';
a3[0][1] = 'Salinan bagan pengendali kebakaran ini harus dipasang di dalam tabung/kotak tahan api dan kedap air yang aman didekat tangga naik/masuk keatas kapal pada setiap sisi.';
a3[0][2] = 'Tabung/kotak bagan pengendali kebakaran ini harus diberi warna merah dan diberi tanda/stensil “Fire Plan” berwarna putih.';
a3[0][3] = 'Didalam tabung tersebut juga harus dilengkapi salinan daftar awak kapal dan manifest jumlah penumpang yang selalu diperbaharui setiap saat';
a1[1] = 0;a2[1] = 'GT kurang dari 100';a3[1] = [];a3[1][0] = 'Tidak diwajibkan';i = -1; do { i++;} while (gtKu< a1[i]); batasan[nomorItem] = a2[i]; persyaratan[nomorItem] = a3[i];

nomorItem = 19;item[nomorItem] = 'u. Sijil – sijil (muster list) di atas kapal';a1[0] = 35;a2[0] = 'GT sama dengan atau lebih besar 35';a3[0] = [];a3[0][0] = 'Perusahaan wajib menyusun sijil – sijil (muster list) seperti yang tertulis di bawah ini :';
a3[0][1]=[];a3[0][1][0] = 'Sijil pemadam kebakaran.';
a3[0][1][1] = 'Sijil meninggalkan kapal.';
a3[0][1][2] = 'Sijil menanggulangi pencemaran.';
a3[0][1][3] = 'Sijil pertolongan orang jatuh ke laut.';
a3[0][1][4] = 'Sijil mengatasi kebocoran.';
a3[0][1][5] = 'Daftar ronda/patroli.';
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



		teks="<div style='font-size:10px'><i>Pemadam2B - Pasal 55</i></div>"+teks;

                document.getElementById("demo").innerHTML = teks;


            }