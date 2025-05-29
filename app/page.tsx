'use client';
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const examples = [
  {
    id: 1,
    title: "Rectangle Area",
    question: "Length = 3.5m, Width = 120cm. Find the area in m².",
    answer: 4.2,
    explanation: "Convert 120cm = 1.2m, then A = l × w = 3.5 × 1.2 = 4.2m²"
  },
  {
    id: 2,
    title: "Box Volume",
    question: "Length = 20cm, Width = 15cm, Height = 0.5m. Find the volume in cm³.",
    answer: 150000,
    explanation: "0.5m = 50cm, so V = 20 × 15 × 50 = 15000cm³"
  },
  {
    id: 3,
    title: "Triangle Perimeter",
    question: "Sides are 120mm, 13cm, and 0.2m. Find perimeter in cm.",
    answer: 45,
    explanation: "120mm = 12cm, 0.2m = 20cm, sum = 12 + 13 + 20 = 45cm"
  }
];

export default function Year11Math() {
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id, value) => {
    setUserAnswers({ ...userAnswers, [id]: value });
  };

  const checkAnswer = (id, userInput) => {
    const correct = examples.find((q) => q.id === id).answer;
    return Math.abs(Number(userInput) - correct) < 0.01;
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">Year 11 Maths – Perimeter, Area & Volume</h1>
      {examples.map((ex) => (
        <Card key={ex.id}>
          <CardContent className="space-y-2 p-4">
            <h2 className="text-xl font-semibold">{ex.title}</h2>
            <p>{ex.question}</p>
            <Input
              type="number"
              placeholder="Your answer"
              value={userAnswers[ex.id] || ""}
              onChange={(e) => handleChange(ex.id, e.target.value)}
            />
            {submitted && (
              <div>
                {checkAnswer(ex.id, userAnswers[ex.id]) ? (
                  <p className="text-green-600">Correct ✅</p>
                ) : (
                  <p className="text-red-600">
                    Nope ❌ Explanation: {ex.explanation}
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
      <Button onClick={() => setSubmitted(true)}>Check Answers</Button>
    </div>
  );
}
