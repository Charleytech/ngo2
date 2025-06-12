document.addEventListener('DOMContentLoaded', () => {
    // --- NIGERIA STATES AND LGAs DATA ---
    // (This large data object is the same as before, no changes needed here)
    const nigeriaStates = {
        "Abia": ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu Nneochi"],
        "Adamawa": ["Demsa", "Fufure", "Ganye", "Gayuk", "Gombi", "Grie", "Hong", "Jada", "Larmurde", "Madagali", "Maiha", "Mayo-Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"],
        "Akwa Ibom": ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono-Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai", "Nsit-Ibom", "Nsit-Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung-Uko", "Ukanafun", "Uruan", "Urue-Offong/Oruko", "Uyo"],
        "Anambra": ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"],
        "Bauchi": ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"],
        "Bayelsa": ["Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"],
        "Benue": ["Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Oturkpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"],
        "Borno": ["Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"],
        "Cross River": ["Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakuur", "Yala"],
        "Delta": ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", "Uvwie", "Warri North", "Warri South", "Warri South West"],
        "Ebonyi": ["Abakaliki", "Afikpo North", "Afikpo South (Edda)", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha"],
        "Edo": ["Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba Okha", "Orhionmwon", "Oredo", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde"],
        "Ekiti": ["Ado Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Gbonyin", "Ido Osi", "Ijero", "Ikere", "Ikole", "Ilejemeje", "Irepodun/Ifelodun", "Ise/Orun", "Moba", "Oye"],
        "Enugu": ["Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo Uwani"],
        "FCT - Abuja": ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council"],
        "Gombe": ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"],
        "Imo": ["Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West", "Unuimo"],
        "Jigawa": ["Auyo", "Babura", "Biriniwa", "Birnin Kudu", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", "Kazaure", "Kiri Kasama", "Kiyawa", "Kaugama", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi"],
        "Kaduna": ["Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"],
        "Kano": ["Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"],
        "Katsina": ["Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", "Dandume", "Danja", "Dan Musa", "Daura", "Dutsi", "Dutsin Ma", "Faskari", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Katsina", "Kurfi", "Kusada", "Mai'Adua", "Malumfashi", "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"],
        "Kebbi": ["Aleiro", "Arewa Dandi", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Bunza", "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Wasagu/Danko", "Yauri", "Zuru"],
        "Kogi": ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela Odolu", "Ijumu", "Kabba/Bunu", "Kogi", "Lokoja", "Mopa Muro", "Ofu", "Ogori/Magongo", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"],
        "Kwara": ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"],
        "Lagos": ["Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"],
        "Nasarawa": ["Akwanga", "Awe", "Doma", "Karu", "Keana", "Keffi", "Lafia", "Nasarawa", "Nasarawa Egon", "Obi", "Toto", "Wamba"],
        "Niger": ["Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Mashegu", "Mokwa", "Moya", "Paikoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"],
        "Ogun": ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Egbado North", "Egbado South", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko Afon", "Ipokia", "Obafemi Owode", "Odeda", "Odogbolu", "Ogun Waterside", "Remo North", "Shagamu"],
        "Ondo": ["Akoko North-East", "Akoko North-West", "Akoko South-West", "Akoko South-East", "Akure North", "Akure South", "Ese Odo", "Idanre", "Ifedore", "Ilaje", "Ile Oluji/Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"],
        "Osun": ["Aiyedaade", "Aiyedire", "Atakunmosa East", "Atakunmosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Ife Central", "Ife East", "Ife North", "Ife South", "Egbedore", "Ejigbo", "Ifedayo", "Ifelodun", "Ila", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo Otin", "Ola Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"],
        "Oyo": ["Afijio", "Akinyele", "Atiba", "Atisbo", "Egbeda", "Ibadan North", "Ibadan North-East", "Ibadan North-West", "Ibadan South-East", "Ibadan South-West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu", "Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona Ara", "Orelope", "Ori Ire", "Oyo", "Oyo East", "Saki East", "Saki West", "Surulere"],
        "Plateau": ["Bokkos", "Barkin Ladi", "Bassa", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"],
        "Rivers": ["Port Harcourt", "Obio-Akpor", "Okrika", "Ogu–Bolo", "Eleme", "Tai", "Gokana", "Khana", "Oyigbo", "Opobo–Nkoro", "Andoni", "Bonny", "Degema", "Asari-Toru", "Akuku-Toru", "Abua–Odual", "Ahoada West", "Ahoada East", "Ogba–Egbema–Ndoni", "Emuoha", "Ikwerre", "Etche", "Omuma"],
        "Sokoto": ["Binji", "Bodinga", "Dange Shuni", "Gada", "Goronyo", "Gudu", "Gwadabawa", "Illela", "Isa", "Kebbe", "Kware", "Rabah", "Sabon Birni", "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tangaza", "Tureta", "Wamako", "Wurno", "Yabo"],
        "Taraba": ["Ardo Kola", "Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", "Karim Lamido", "Kumi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"],
        "Yobe": ["Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Machina", "Nangere", "Nguru", "Potiskum", "Tarmuwa", "Yunusari", "Yusufari"],
        "Zamfara": ["Anka", "Bakura", "Birnin Magaji/Kiyaw", "Bukkuyum", "Bungudu", "Gummi", "Gusau", "Kaura Namoda", "Maradun", "Maru", "Shinkafi", "Talata Mafara", "Chafe", "Zurmi"]
    };

    // --- APPLICATION FORM LOGIC (index.html) ---
    const grantForm = document.getElementById('grant-form');
    if (grantForm) {
        // ... (The entire application form logic from the previous answer is unchanged)
        const stateOfOriginSelect = document.getElementById('stateOfOrigin');
        const lgaOfOriginSelect = document.getElementById('lgaOfOrigin');
        const formMessage = document.getElementById('form-message');
        const states = Object.keys(nigeriaStates);
        states.sort().forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateOfOriginSelect.appendChild(option);
        });
        stateOfOriginSelect.addEventListener('change', () => {
            const selectedState = stateOfOriginSelect.value;
            lgaOfOriginSelect.innerHTML = '<option value="" disabled selected>-- Select L.G.A --</option>'; // Reset LGAs
            lgaOfOriginSelect.disabled = true;
            if (selectedState && nigeriaStates[selectedState]) {
                const lgas = nigeriaStates[selectedState];
                lgas.sort().forEach(lga => {
                    const option = document.createElement('option');
                    option.value = lga;
                    option.textContent = lga;
                    lgaOfOriginSelect.appendChild(option);
                });
                lgaOfOriginSelect.disabled = false;
            }
        });
        grantForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formMessage.textContent = '';
            formMessage.className = '';
            const formData = new FormData(grantForm);
            const applicationData = Object.fromEntries(formData.entries());
            const passportFile = document.getElementById('passport').files[0];
            if (passportFile) {
                applicationData.passport = passportFile.name;
            }
            let applications = JSON.parse(localStorage.getItem('hiaf_grant_applications')) || [];
            const isDuplicate = applications.some(app => app.email === applicationData.email || app.nin === applicationData.nin || app.bvn === applicationData.bvn);
            if (isDuplicate) {
                formMessage.textContent = 'An application with this Email, NIN, or BVN already exists. You cannot apply more than once.';
                formMessage.className = 'error-message';
                return;
            }
            applicationData.id = Date.now();
            applicationData.appliedAt = new Date().toISOString();
            applications.push(applicationData);
            localStorage.setItem('hiaf_grant_applications', JSON.stringify(applications));
            formMessage.textContent = 'Your application has been submitted successfully! We will review it and get back to you.';
            formMessage.className = 'success-message';
            grantForm.reset();
            lgaOfOriginSelect.innerHTML = '<option value="" disabled selected>-- Select L.G.A --</option>';
            lgaOfOriginSelect.disabled = true;
        });
    }


    // --- ADMIN DASHBOARD LOGIC (admin.html) ---
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        const adminLoginSection = document.getElementById('admin-login');
        const adminDashboardSection = document.getElementById('admin-dashboard');

        // Check if user is already logged in (using sessionStorage for the current browser session)
        if (sessionStorage.getItem('hiaf_admin_loggedin') === 'true') {
            showDashboard();
        }

        // Handle the login form submission
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const loginError = document.getElementById('login-error');
            
            // --- IMPORTANT: Hardcoded credentials for demonstration ---
            // In a real application, this check MUST be done on a secure server.
            if (username === 'admin' && password === 'HIAF_Admin2024') {
                sessionStorage.setItem('hiaf_admin_loggedin', 'true');
                showDashboard();
                loginError.style.display = 'none';
            } else {
                loginError.style.display = 'block';
            }
        });

        // Function to hide login and show the dashboard
        function showDashboard() {
            adminLoginSection.style.display = 'none';
            adminDashboardSection.style.display = 'block';
            loadApplicationsIntoTable(); // <-- The magic happens here
        }

        // Function to handle logout
        const logoutButton = document.getElementById('logout-button');
        logoutButton.addEventListener('click', () => {
            sessionStorage.removeItem('hiaf_admin_loggedin');
            // Show the login form and hide the dashboard
            adminLoginSection.style.display = 'block';
            adminDashboardSection.style.display = 'none';
            // Clear credentials from form fields for security
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        });
        
        // --- NEW & ENHANCED FUNCTION ---
        // Fetches data from localStorage and populates the HTML table
        function loadApplicationsIntoTable() {
            const applications = JSON.parse(localStorage.getItem('hiaf_grant_applications')) || [];
            const tbody = document.getElementById('applications-tbody');
            tbody.innerHTML = ''; // Clear any existing rows before loading

            if (applications.length === 0) {
                // Display a message if no applications are found
                tbody.innerHTML = '<tr><td colspan="15" style="text-align:center; white-space: normal;">No applications have been submitted yet.</td></tr>';
                return;
            }

            // Loop through each application and create a table row for it
            applications.forEach(app => {
                const row = document.createElement('tr');
                // Using template literals to build the row's HTML
                row.innerHTML = `
                    <td>${app.id}</td>
                    <td>${new Date(app.appliedAt).toLocaleString()}</td>
                    <td>${app.fullName || 'N/A'}</td>
                    <td>${app.email || 'N/A'}</td>
                    <td>${app.phoneNumber || 'N/A'}</td>
                    <td>${app.nin || 'N/A'}</td>
                    <td>${app.bvn || 'N/A'}</td>
                    <td>${app.stateOfOrigin || 'N/A'}</td>
                    <td>${app.lgaOfOrigin || 'N/A'}</td>
                    <td style="white-space: normal;">${app.homeAddress || 'N/A'}</td>
                    <td>${app.bankName || 'N/A'}</td>
                    <td>${app.accountNumber || 'N/A'}</td>
                    <td>${app.accountName || 'N/A'}</td>
                    <td style="white-space: normal;">${app.businessNature || 'N/A'}</td>
                    <td>${app.passport || 'N/A'}</td>
                `;
                tbody.appendChild(row);
            });
        }
    }
});