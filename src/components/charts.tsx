"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { motion } from "framer-motion";
import { computeCredibilitySummary } from "@/lib/data";

const budgetData = [
  { label: "Pagu 2025", value: 71, fill: "#64748b" },
  { label: "Realisasi 2025", value: 52.9, fill: "#3b82f6" },
  { label: "Alokasi 2026", value: 335, fill: "#2563eb" },
];

const PIE_COLORS = ["#10b981", "#3b82f6", "#94a3b8", "#f59e0b"];

export function Charts() {
  const cred = computeCredibilitySummary();

  const credData = [
    { name: "Data Resmi", value: cred.official },
    { name: "Estimasi Turunan", value: cred.derived },
    { name: "Sumber Sekunder", value: cred.secondary },
    { name: "Belum Terverifikasi", value: cred.cautionary },
  ].filter((d) => d.value > 0);

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950/50" id="grafik">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Visualisasi Data
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Grafik perbandingan anggaran dan komposisi kredibilitas data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Budget bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-5"
          >
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Perbandingan Anggaran (Triliun Rp)
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={budgetData}
                  margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e2e8f0"
                  />
                  <XAxis
                    dataKey="label"
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11 }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `${v}T`}
                  />
                  <Tooltip
                    formatter={(value) => [`Rp${value}T`, "Jumlah"]}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {budgetData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Credibility pie chart */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-5"
          >
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Komposisi Kredibilitas Data
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={credData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {credData.map((_, i) => (
                      <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => [
                      `${value} metrik`,
                      name,
                    ]}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      fontSize: "12px",
                    }}
                  />
                  <Legend
                    iconSize={10}
                    wrapperStyle={{ fontSize: "11px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
