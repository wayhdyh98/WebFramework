# Jawaban Pertanyaan Pertemuan 5

## Praktikum 1

### No 1

A. Tampilannya akan menyempit ke tengah.

<img src='./src/prak1a.png'>

B. Perbedaannya kalau container untuk layout yang model box (tidak full-width layar browser) sedangkan container-fluid untuk yang full-width layar browser.

### No 2

Dengan menginstall atau membuat komponen tersebut. Contoh semisal kita ingin menggunakan komponen bootstrap tetapi dalam module ReactJS tidak tersedia, maka diharuskan untuk menginstall komponen bootstrap tersebut dengan cara <i>npm install react-bootstrap bootstrap</i>.

## Praktikum 2

### A. Kenapa json-server dijalankan pada port 3001? Kenapa tidak sama-sama dijalankan pada port 3000 seperti project react yang sudah kita buat?

Karena port 3000 dipakai untuk menjalankan projek react dan hal tersebut dapat mengakibatkan crash ketika menjalankan dua server pada port yang sama.

### B. Bagaimana jadinya kalua kita ganti port json-server menjadi 3000?

Hasilnya server kedua yang akan menggunakan port yang sama mendapat notifikasi untuk mengubah tujuan port lain atau server tidak akan berjalan. Untuk lebih jelasnya lihat gambar di bawah.

<img src='./src/prak2b.png'>

## Praktikum 3

### A. Apa yang terjadi setelah kalian klik tombol hapus?

Data yang sudah dibuat atau yang sudah ada akan hilang.

### B. Perhatikan file listArtikel.json, apa yang terjadi pada file tersebut? Kenapa demikian?

Ketika terdapat data yang dihapus dari Server, maka data terbaru dari Server akan dimasukkan kembali ke dalam JSON (rewrite) sehingga data yang dihapus juga hilang di API lokal.

### C. Fungsi handleHapusArtikel itu untuk apa?

Digunakan untuk menghapus data yang dipilih dengan mengirimkan data tersebut ke dalam method DELETE pada Server.

### D. Jelaskan perbedaan fungsi componentDidMount() pada Gambar 1.18 dengan fungsi componentDidMount() pada Gambar 3.2 ?

Bedanya pada Gambar 1.18, setelah proses mount selesai maka langsung dilakukan proses pemanggilan API sedangkan pada Gambar 3.2 setelah proses mount selesai maka akan memanggil sebuah fungsi yang melakukan proses pemanggilan API.

## Praktikum 4

### A. Jelaskan apa yang terjadi pada file listArtikel.json sebelum dan setelah melakukan penambahan data?

Sebelum dilakukan penambahan data, data akan tetap seperti sebelumnya. Setelah dilakukan penambahan data, data akan bertambah pada file JSON dikarenakan setelah file JSON akan di-rewrite datanya dengan data di Server.

### B. Data yang ditampilkan di browser adalah data terbaru berada di posisi atas dan data lama berada di bawah, sedangkan pada file listArtikel.json data terbaru malah berada di bawah. Jelaskan mengapa demikian?

Dikarenakan id data baru menggunakan data timestamp yang artinya semakin baru data tersebut maka waktunya akan semakin maju dan pengurutan data berdasarkan id terkecil sehingga data baru akan selalu muncul di bawah.
