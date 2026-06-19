require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models");
const { Op } = require("sequelize"); 

const app = express();
const port = process.env.PORT || 3001; 

app.use(cors()); 
app.use(express.json());

// Sincronización y Carga Exacta de tu Agenda de 21 Días
db.sequelize.sync({ alter: true }).then(async () => {
  console.log("DB Sincronizada.");
  try {
    if (db.Agenda) {
      await db.Agenda.destroy({ where: {} });
      console.log("Cargando tu ciclo exacto de 21 días...");
      const eventosBase = [];

      // --- SEMANA 1 ---
      eventosBase.push({ diaCiclo: 1, horaInicio: "08:45", horaFin: "09:45", titulo: "Gimnasio", tipo: "Salud" });
      eventosBase.push({ diaCiclo: 1, horaInicio: "10:00", horaFin: "16:00", titulo: "Trabajo", tipo: "Obligacion" });
      eventosBase.push({ diaCiclo: 1, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 2, horaInicio: "10:00", horaFin: "16:00", titulo: "Trabajo", tipo: "Obligacion" });
      eventosBase.push({ diaCiclo: 2, horaInicio: "16:30", horaFin: "18:30", titulo: "Estudiar", tipo: "Estudio" });
      eventosBase.push({ diaCiclo: 2, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 3, horaInicio: "08:45", horaFin: "09:45", titulo: "Gimnasio", tipo: "Salud" });
      eventosBase.push({ diaCiclo: 3, horaInicio: "10:00", horaFin: "16:00", titulo: "Trabajo", tipo: "Obligacion" });
      eventosBase.push({ diaCiclo: 3, horaInicio: "17:00", horaFin: "18:00", titulo: "Psicologo", tipo: "Salud" });
      eventosBase.push({ diaCiclo: 3, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 4, horaInicio: "10:00", horaFin: "16:00", titulo: "Trabajo", tipo: "Obligacion" });
      eventosBase.push({ diaCiclo: 4, horaInicio: "16:30", horaFin: "18:30", titulo: "Estudiar", tipo: "Estudio" });
      eventosBase.push({ diaCiclo: 4, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 5, horaInicio: "10:00", horaFin: "16:00", titulo: "Trabajo", tipo: "Obligacion" });
      eventosBase.push({ diaCiclo: 5, horaInicio: "16:30", horaFin: "18:00", titulo: "Gimnasio", tipo: "Salud" });
      eventosBase.push({ diaCiclo: 5, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 6, horaInicio: "12:00", horaFin: "14:00", titulo: "Meal Prep", tipo: "Rutina" });
      eventosBase.push({ diaCiclo: 6, horaInicio: "14:00", horaFin: "16:00", titulo: "Limpieza", tipo: "Rutina" });
      
      eventosBase.push({ diaCiclo: 7, horaInicio: "22:30", horaFin: "23:30", titulo: "Revision Semanal", tipo: "Auditoria" });

      // --- SEMANA 2 ---
      eventosBase.push({ diaCiclo: 8, horaInicio: "10:00", horaFin: "16:00", titulo: "Trabajo", tipo: "Obligacion" });
      eventosBase.push({ diaCiclo: 8, horaInicio: "16:30", horaFin: "18:00", titulo: "Gimnasio", tipo: "Salud" });
      eventosBase.push({ diaCiclo: 8, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 9, horaInicio: "10:00", horaFin: "16:00", titulo: "Trabajo", tipo: "Obligacion" });
      eventosBase.push({ diaCiclo: 9, horaInicio: "16:30", horaFin: "18:30", titulo: "Estudiar", tipo: "Estudio" });
      eventosBase.push({ diaCiclo: 9, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 10, horaInicio: "08:45", horaFin: "09:45", titulo: "Gimnasio", tipo: "Salud" });
      eventosBase.push({ diaCiclo: 10, horaInicio: "10:00", horaFin: "16:00", titulo: "Trabajo", tipo: "Obligacion" });
      eventosBase.push({ diaCiclo: 10, horaInicio: "17:00", horaFin: "18:00", titulo: "Psicologo", tipo: "Salud" });
      eventosBase.push({ diaCiclo: 10, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 11, horaInicio: "12:00", horaFin: "14:00", titulo: "Meal Prep", tipo: "Rutina" });
      eventosBase.push({ diaCiclo: 11, horaInicio: "14:00", horaFin: "18:00", titulo: "Estudiar", tipo: "Estudio" });
      eventosBase.push({ diaCiclo: 11, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 12, horaInicio: "14:00", horaFin: "16:00", titulo: "Limpieza", tipo: "Rutina" });
      eventosBase.push({ diaCiclo: 12, horaInicio: "16:30", horaFin: "18:00", titulo: "Gimnasio", tipo: "Salud" });
      eventosBase.push({ diaCiclo: 12, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 13, horaInicio: "16:00", horaFin: "22:00", titulo: "Trabajo", tipo: "Obligacion" });
      
      eventosBase.push({ diaCiclo: 14, horaInicio: "16:00", horaFin: "22:00", titulo: "Trabajo", tipo: "Obligacion" });
      eventosBase.push({ diaCiclo: 14, horaInicio: "22:30", horaFin: "23:30", titulo: "Revision Semanal", tipo: "Auditoria" });

      // --- SEMANA 3 ---
      eventosBase.push({ diaCiclo: 15, horaInicio: "10:00", horaFin: "16:00", titulo: "Trabajo", tipo: "Obligacion" });
      eventosBase.push({ diaCiclo: 15, horaInicio: "16:30", horaFin: "18:00", titulo: "Gimnasio", tipo: "Salud" });
      eventosBase.push({ diaCiclo: 15, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 16, horaInicio: "12:00", horaFin: "14:00", titulo: "Meal Prep", tipo: "Rutina" });
      eventosBase.push({ diaCiclo: 16, horaInicio: "14:00", horaFin: "18:00", titulo: "Estudiar", tipo: "Estudio" });
      eventosBase.push({ diaCiclo: 16, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 17, horaInicio: "12:00", horaFin: "14:00", titulo: "Limpieza", tipo: "Rutina" });
      eventosBase.push({ diaCiclo: 17, horaInicio: "15:00", horaFin: "16:30", titulo: "Gimnasio", tipo: "Salud" });
      eventosBase.push({ diaCiclo: 17, horaInicio: "17:00", horaFin: "18:00", titulo: "Psicologo", tipo: "Salud" });
      eventosBase.push({ diaCiclo: 17, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 18, horaInicio: "10:00", horaFin: "16:00", titulo: "Trabajo", tipo: "Obligacion" });
      eventosBase.push({ diaCiclo: 18, horaInicio: "16:30", horaFin: "18:30", titulo: "Estudiar", tipo: "Estudio" });
      eventosBase.push({ diaCiclo: 18, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 19, horaInicio: "10:00", horaFin: "16:00", titulo: "Trabajo", tipo: "Obligacion" });
      eventosBase.push({ diaCiclo: 19, horaInicio: "16:30", horaFin: "18:00", titulo: "Gimnasio", tipo: "Salud" });
      eventosBase.push({ diaCiclo: 19, horaInicio: "18:30", horaFin: "22:30", titulo: "Cursado TUP", tipo: "Estudio" });
      
      eventosBase.push({ diaCiclo: 20, horaInicio: "10:00", horaFin: "16:00", titulo: "Trabajo", tipo: "Obligacion" });
      
      eventosBase.push({ diaCiclo: 21, horaInicio: "10:00", horaFin: "16:00", titulo: "Trabajo", tipo: "Obligacion" });
      eventosBase.push({ diaCiclo: 21, horaInicio: "22:30", horaFin: "23:30", titulo: "Revision Semanal", tipo: "Auditoria" });

      await db.Agenda.bulkCreate(eventosBase);
    }
  } catch (error) { console.error("Error al crear agenda:", error); }
});

// --- RUTAS AGENDA ---
app.get("/api/agenda", async (req, res) => {
  try { const agenda = await db.Agenda.findAll(); res.json(agenda); } catch (e) { res.status(500).json({error: "Error"}); }
});
app.post("/api/agenda", async (req, res) => {
  try { const nuevo = await db.Agenda.create(req.body); res.json(nuevo); } catch (e) { res.status(500).json({error: "Error"}); }
});
app.put("/api/agenda/:id", async (req, res) => {
  try { await db.Agenda.update(req.body, { where: { id: req.params.id } }); res.json({success:true}); } catch (e) { res.status(500).json({error: "Error"}); }
});
app.delete("/api/agenda/:id", async (req, res) => {
  try { await db.Agenda.destroy({ where: { id: req.params.id } }); res.json({success:true}); } catch (e) { res.status(500).json({error: "Error"}); }
});

// --- RUTAS DE HÁBITOS (REDISEÑADO MANUAL) ---
app.get("/api/habitos/historial", async (req, res) => {
  try {
    const { mes, anio } = req.query; 
    const fechaInicio = new Date(parseInt(anio), parseInt(mes), 1);
    const fechaFin = new Date(parseInt(anio), parseInt(mes) + 1, 0, 23, 59, 59);
    const historial = await db.Habitos.findAll({ where: { fecha: { [Op.between]: [fechaInicio, fechaFin] } }, order: [["fecha", "DESC"]] });
    res.json(historial);
  } catch (error) { res.status(500).json({ error: "Error" }); }
});

app.post("/api/habitos", async (req, res) => {
  try {
    const fechaLocal = req.body.fecha;
    let misHabitos = await db.Habitos.findOne({ where: { fecha: fechaLocal } });
    if (!misHabitos) misHabitos = await db.Habitos.create({ ...req.body, fecha: fechaLocal });
    else await misHabitos.update(req.body);
    res.json(misHabitos);
  } catch (error) { res.status(500).json({ error: "Error" }); }
});

app.delete("/api/habitos/:id", async (req, res) => {
  try { await db.Habitos.destroy({ where: { id: req.params.id } }); res.json({ success: true }); } 
  catch (error) { res.status(500).json({ error: "Error" }); }
});

// --- RUTAS FINANZAS ---
app.get("/api/finanzas", async (req, res) => {
  try {
    const { mes, anio } = req.query; 
    const fechaInicio = new Date(parseInt(anio), parseInt(mes), 1);
    const fechaFin = new Date(parseInt(anio), parseInt(mes) + 1, 0, 23, 59, 59);
    const transaccionesMes = await db.Finanzas.findAll({ where: { fecha: { [Op.between]: [fechaInicio, fechaFin] } }, order: [["fecha", "DESC"]] });
    
    let ingresos = 0; let necesarios = 0; let innecesarios = 0;
    transaccionesMes.forEach(t => {
      const monto = parseFloat(t.monto);
      if (t.tipo === "Ingreso") ingresos += monto;
      else if (t.tipo === "Gasto") { if (t.categoria === "Necesario") necesarios += monto; else if (t.categoria === "Innecesario") innecesarios += monto; }
    });

    res.json({ transacciones: transaccionesMes, resumen: { ingresos, necesarios, innecesarios } });
  } catch (error) { res.status(500).json({ error: "Error" }); }
});

app.post("/api/finanzas", async (req, res) => {
  try {
    const { monto, tipo, categoriaFinanzas, subTipo, aplicacion, fecha } = req.body;
    const nuevaTransaccion = await db.Finanzas.create({ monto: parseFloat(monto), tipo: tipo, categoria: tipo === "Ingreso" ? "Ingreso" : subTipo, categoriaFinanzas: categoriaFinanzas || "General", aplicacion: aplicacion || "Efectivo", fecha: fecha ? new Date(fecha) : new Date() });
    res.json(nuevaTransaccion);
  } catch (error) { res.status(500).json({ error: "Error" }); }
});

app.put("/api/finanzas/:id", async (req, res) => {
  try {
    const { monto, tipo, categoriaFinanzas, subTipo, aplicacion, fecha } = req.body;
    await db.Finanzas.update({ monto: parseFloat(monto), tipo: tipo, categoria: tipo === "Ingreso" ? "Ingreso" : subTipo, categoriaFinanzas: categoriaFinanzas || "General", aplicacion: aplicacion || "Efectivo", fecha: fecha ? new Date(fecha) : new Date() }, { where: { id: req.params.id } });
    res.json({ success: true });
  } catch (error) { res.status(500).json({ error: "Error" }); }
});

app.delete("/api/finanzas/:id", async (req, res) => {
  try { await db.Finanzas.destroy({ where: { id: req.params.id } }); res.json({ success: true }); } 
  catch (error) { res.status(500).json({ error: "Error" }); }
});

// --- RUTA PROGRESO MOTO (ACUMULADOR HISTÓRICO REAL Y SIN SEGUROS CONTRA NEGATIVOS) ---
app.get("/api/ahorro-moto", async (req, res) => {
  try {
    // Busca TODAS las transacciones de toda la historia (Sin importar el mes)
    const todasLasTransacciones = await db.Finanzas.findAll();
    
    let totalIngresos = 0;
    let totalGastos = 0;

    todasLasTransacciones.forEach(t => {
      if (t.tipo === "Ingreso") totalIngresos += parseFloat(t.monto);
      if (t.tipo === "Gasto") totalGastos += parseFloat(t.monto);
    });

    // Ahorro real de todos los tiempos (Puede dar negativo y está perfecto)
    const capitalActual = totalIngresos - totalGastos;
    const objetivo = 2000000; // Objetivo de 2 Millones

    // La barra de porcentaje visual SÍ la protegemos para que no rompa el diseño (no puede ser menor a 0% ni mayor a 100%)
    let porcentajeProgreso = 0;
    if (capitalActual > 0) {
        porcentajeProgreso = Math.min(100, Math.round((capitalActual / objetivo) * 100));
    }

    // Devolvemos el capital real tal cual es
    res.json({ porcentajeProgreso, capitalActual });
  } catch (error) { 
    console.error(error);
    res.status(500).json({ error: "Error calculando el acumulador" }); 
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));