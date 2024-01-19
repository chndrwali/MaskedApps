const steps = {
  title: 'Bagaimana cara menggunakannya?',
  stepsBody: [
    {
      id: 0,
      title: 'Pilih Gambar',
      desc: 'Pilih gambar sampah yang ingin diklasifikasikan.',
    },
    {
      id: 1,
      title: 'Klasifikasikan',
      desc: 'Model Machine Learning akan mengklasifikasikan sampah yang dipilih berdasarkan 3 jenis orang menggunakan masker, salah memakai masker dan tidak menggunakan masker.',
    },
    {
      id: 2,
      title: 'Hasil Klasifikasi',
      desc: 'Hasil klasifikasi akan ditampilkan berupa jenis dan kategori, serta persentase kecocokan.',
    },
  ],
};

const featured = {
  title: 'Keunggulan Aplikasi',
  features: [
    {
      id: 0,
      title: 'Klasifikasi 3 Jenis Orang Menggunakan Masker',
      desc: 'Aplikasi ini dapat mengklasifikasikan orang menggunakan masker menjadi 3 jenis dan kategori, serta persentase kecocokan.',
    },
    {
      id: 1,
      title: 'Mudah Digunakan',
      desc: 'Aplikasi ini dapat digunakan oleh siapa saja tanpa harus mengerti tentang Machine Learning.',
    },
    {
      id: 2,
      title: 'End-to-End',
      desc: 'Aplikasi ini mengintegrasikan model Machine Learning secara End-to-End berbasis Web, sehingga pengguna tidak perlu menginstall Python dan menjalankan model Machine Learning pada Kode Notebook Python.',
    },
  ],
};

const footer = {
  copy: '2024 Masked Apps | Tugas Sistem Pakar',
  twitter: {
    title: 'View On Twitter',
    url: 'https://twitter.com/chndrwali',
  },
  linkedin: {
    title: 'View On Linkedin',
    url: 'https://linkedin.com/in/chndrwali',
  },
  instagram: {
    title: 'View On Instagram',
    url: 'https://instagram.com/chndrwali',
  },
};

export {
  steps, featured, footer,
};