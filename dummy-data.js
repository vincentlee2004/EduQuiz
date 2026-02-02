// Cek apakah sudah ada data soal? Jika belum, isi dengan data contoh.
function initDemoData() {
    const existingData = localStorage.getItem('eduQuizQuestions');
    
    if (!existingData || JSON.parse(existingData).length === 0) {
        console.log("Mengisi data demo untuk klien...");
        
        const demoQuestions = [
            {
                id: Date.now(),
                audioName: "Demo Audio (Gajah)",
                // Audio dummy pendek (Base64)
                audio: "data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA//////////////////////////////////////////////////////////////////8AAAA9TEFNRTMuMTAwA7oAAAAAAAAAABQkJAAACAAAAnEAAq1KYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7kMQAAAAAAAABAAAAABAAAAAAA=",
                answers: [
                    { image: "https://via.placeholder.com/150/0000FF/808080?text=Gajah", isCorrect: true },
                    { image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Kucing", isCorrect: false },
                    { image: "https://via.placeholder.com/150/FFFF00/000000?text=Burung", isCorrect: false },
                    { image: "https://via.placeholder.com/150/008000/FFFFFF?text=Ikan", isCorrect: false }
                ]
            }
        ];
        
        localStorage.setItem('eduQuizQuestions', JSON.stringify(demoQuestions));
        location.reload(); // Refresh halaman agar tombol Play aktif
    }
}