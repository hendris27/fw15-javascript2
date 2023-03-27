const searchNum = (nilaiAwal, nilaiAkhir, dataArray) => {
    let hasil = [];
    if (typeof nilaiAwal === "number" && typeof nilaiAkhir === "number") {
        if (dataArray.length < 5) {
            console.log("Jumlah angka dalam data Array harus lebih dari 5");
        } else if (nilaiAwal > nilaiAkhir) {
            console.log("nilai Awal harus lebih kecil dari pada nilai Akhir");
        } else {
            for (let i = 0; i < dataArray.length; i++) {
                if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
                    hasil.push(dataArray[i]);
                }
            }
            if (hasil.length) {
                console.log(hasil.sort());
            } else {
                console.log("Data tidak ditemukan");
            }
        }
    }
};

searchNum(2, 10, [7, 4, 11, 9, 12]);
searchNum(7, 25, [3, 5, 19, 6]);
searchNum(10, 4, [3, 10, 8, 11, 9]);
searchNum(12, 14, [4, 7, 4, 10, 9]);