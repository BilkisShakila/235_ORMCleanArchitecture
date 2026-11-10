const db = require('../models');

async function getAllKomik(req, res) {
  try {
    const komik = await db.Komik.findAll();
    res.status(200).json(komik);
  } catch (err) {
    console.error('Error fetching komik:', err.message);
    res.status(500).json({ error: 'Failed to fetch komik' });
  }
}

async function getKomikById(req, res) {
  const { id } = req.params;
  try {
    const komik = await db.Komik.findByPk(id);
    if (!komik) {
      // Kode di bawah ini terpotong di layar, ini adalah kelanjutan yang umum digunakan:
      return res.status(404).json({ error: 'Komik not found' }); 
    }
  } catch (err) {
    console.error('Error fetching komik by id:', err.message);
    res.status(500).json({ error: 'Failed to fetch komik' });
  }
}

async function createKomik(req, res) {
  const { title, author, genre } = req.body;    
  try {
    const newKomik = await db.Komik.create({ title, description, author });
    res.status(201).json(newKomik);
  } catch (err) {
    console.error('Error creating komik:', err.message);
    res.status(500).json({ error: 'Failed to create komik' });
  }
}