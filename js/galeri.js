// Static gallery data - simplified
const galleryData = [
  // Pertanian
  {
    id: 1,
    category: 'pertanian',
    image: 'image/pertanian/IMG_2427.jpg',
  },
  {
    id: 2,
    category: 'pertanian',
    image: 'image/pertanian/IMG_5063.jpg',
  },
  {
    id: 3,
    category: 'pertanian',
    image: 'image/pertanian/IMG_5067.jpg',
  },
  {
    id: 4,
    category: 'pertanian',
    image: 'image/pertanian/IMG_5070.jpg',
  },

  // Peternakan
  {
    id: 7,
    category: 'peternakan',
    image: 'image/peternakan/IMG_2437.jpg',
  },
  {
    id: 8,
    category: 'peternakan',
    image: 'image/peternakan/IMG_2438.jpg',
  },
  {
    id: 9,
    category: 'peternakan',
    image: 'image/peternakan/IMG_2441.jpg',
  },
  {
    id: 10,
    category: 'peternakan',
    image: 'image/peternakan/IMG_2455.jpg',
  },

  // UMKM
  {
    id: 11,
    category: 'umkm',
    image: 'image/umkm/mebel-pak-witik.jpg',
  },
  {
    id: 12,
    category: 'umkm',
    image: 'image/umkm/mecca-laundry.jpg',
  },
  {
    id: 13,
    category: 'umkm',
    image: 'image/umkm/rania-cake.jpg',
  },
  {
    id: 14,
    category: 'umkm',
    image: 'image/umkm/warung-bu-evri.jpg',
  },
  {
    id: 15,
    category: 'umkm',
    image: 'image/umkm/warung-bu-rini.jpg',
  },

  // Fasilitas
  {
    id: 16,
    category: 'fasilitas',
    image: 'image/pemandangan/IMG_2432.jpg',
  },
  {
    id: 17,
    category: 'fasilitas',
    image: 'image/pemandangan/IMG_2443.jpg',
  },
  {
    id: 18,
    category: 'fasilitas',
    image: 'image/pemandangan/IMG_2444.jpg',
  },
  {
    id: 19,
    category: 'fasilitas',
    image: 'image/pemandangan/IMG_2447.jpg',
  },

  // Kegiatan
  {
    id: 20,
    category: 'kegiatan',
    image: 'image/kegiatan/halal-bihalal.jpeg',
  },
  {
    id: 21,
    category: 'kegiatan',
    image: 'image/kegiatan/hari-jadi-desa-petir.jpg',
  },
  {
    id: 22,
    category: 'kegiatan',
    image: 'image/kegiatan/kerja-bakti-membangun-gapura.jpg',
  },
  {
    id: 23,
    category: 'kegiatan',
    image: 'image/kegiatan/pentas-seni-hari-jadi-desa-petir.jpeg',
  },
  {
    id: 24,
    category: 'kegiatan',
    image: 'image/kegiatan/sepak-bola.jpg',
  },
];

// DOM elements
const galleryGrid = document.getElementById('galleryGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

// Render gallery items - simplified
function renderGallery(items) {
  galleryGrid.innerHTML = '';

  items.forEach((item) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
                    <div class="gallery-image" style="background-image: url('${item.image}')">
                        <div class="gallery-category">${getCategoryLabel(item.category)}</div>
                    </div>
                `;

    // Add click event to open modal
    galleryItem.addEventListener('click', () => {
      modalImage.src = item.image;
      modalTitle.textContent = getCategoryLabel(item.category);
      modalDescription.textContent = `Foto dokumentasi ${getCategoryLabel(item.category)} Padukuhan Ngurak-Urak`;
      imageModal.show();
    });

    galleryGrid.appendChild(galleryItem);
  });
}

// Get category label in Indonesian
function getCategoryLabel(category) {
  const labels = {
    pertanian: 'Pertanian',
    peternakan: 'Peternakan',
    umkm: 'UMKM',
    fasilitas: 'Fasilitas',
    kegiatan: 'Kegiatan',
  };
  return labels[category] || category;
}

// Filter gallery by category
function filterGallery(category) {
  if (category === 'all') {
    renderGallery(galleryData);
  } else {
    const filtered = galleryData.filter((item) => item.category === category);
    renderGallery(filtered);
  }
}

// Add event listeners to category buttons
categoryBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    categoryBtns.forEach((b) => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    // Filter gallery
    const category = btn.getAttribute('data-category');
    filterGallery(category);
  });
});

// Initialize gallery with all items
document.addEventListener('DOMContentLoaded', () => {
  renderGallery(galleryData);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});
