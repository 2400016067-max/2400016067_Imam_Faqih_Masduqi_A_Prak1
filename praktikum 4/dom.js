document.addEventListener('DOMContentLoaded', () => {
    // 1. ini elemen yang akan dimanipulasi
    const factTextElement = document.getElementById('fact-text');
    const newFactButton = document.getElementById('new-fact-btn');

    // Guard: pastikan elemen ada sebelum melanjutkan
    if (!factTextElement || !newFactButton) {
        console.warn('dom.js: Required elements #fact-text or #new-fact-btn not found.');
        return;
    }

    // 2. Daftar fakta manual (aman dan netral)
    const facts = [
        'Kita bernafas kira-kira 23.000 kali setiap hari.',
        'Otak manusia terdiri dari sekitar 75% air.',
        'Gigi adalah bagian tubuh manusia yang paling keras.',
        'Ikan paus biru adalah hewan terbesar yang pernah hidup di bumi.',
        'Lebah madu dapat mengenali wajah manusia.',
        'Manusia dan pisang memiliki sekitar 60% kesamaan genetik.',
        'Air panas lebih cepat membeku daripada air dingin, fenomena ini dikenal sebagai Efek Mpemba.',
        'Bulan menjauh dari Bumi sekitar 3.8 cm setiap tahun.',
        'Kupu-kupu merasakan rasa dengan kakinya.',
        'Pohon tertua di dunia diperkirakan berusia lebih dari 5.000 tahun dan terletak di California, AS.',
        'manusia memiliki sekitar 100.000 rambut di kepala mereka pada rata-rata.',
        'Garam adalah salah satu bahan pengawet makanan tertua yang dikenal manusia.',
        'Kucing memiliki lebih dari 20 otot di setiap telinga mereka.',
        'Cokelat mengandung senyawa yang dapat meningkatkan suasana hati, seperti serotonin dan endorfin.',
        'Bumi berputar sekitar 1.670 kilometer per jam di ekuatornya.',
        'Kupu-kupu memiliki siklus hidup yang terdiri dari empat tahap: telur, larva (ulat), pupa (kepompong), dan dewasa.',
        'Manusia memiliki kemampuan untuk mengenali lebih dari 1 triliun bau yang berbeda.',
        'Pohon bambu dapat tumbuh hingga 91 cm dalam satu hari, menjadikannya salah satu tanaman dengan pertumbuhan tercepat di dunia.',
        'Gajah adalah satu-satunya mamalia yang tidak bisa melompat.',
        'Planet Venus berputar ke arah yang berlawanan dibandingkan planet-planet lain di tata surya kita.'
    ];

    // 3. Fungsi untuk memilih fakta secara acak dari daftar lokal
    function getNewFact() {
        factTextElement.classList.add('loading');
        factTextElement.textContent = 'Mencari fakta baru...';
        newFactButton.disabled = true;

        const randomIndex = Math.floor(Math.random() * facts.length);

        // Simulasi latency kecil agar transisi loading terasa
        setTimeout(() => {
            try {
                factTextElement.textContent = facts[randomIndex];
            } catch (error) {
                console.error('Error setting fact text:', error);
                factTextElement.textContent = "Sorry, couldn't load a fact. Please try again!";
            } finally {
                factTextElement.classList.remove('loading');
                newFactButton.disabled = false;
            }
        }, 350);
    }

    // 4. Menambahkan Event Listener ke tombol
    newFactButton.addEventListener('click', getNewFact);

    // 5. Menampilkan fakta pertama kali saat halaman dimuat
    getNewFact();
});
