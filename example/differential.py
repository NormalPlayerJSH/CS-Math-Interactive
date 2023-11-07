'''
미분 식의 이해
미분과 기울기의 연관성을 그래프를 통해 알아본다.
h값이 작아져갈수록 점점 미분값에 근접해감을 확인한다.

설정
타입: 선 / 변수명: graph
타입: 선 / 변수명: line
타입: 점 / 변수명: dot
'''

def f(x):
  return -1 * x * (x-6)

start = 0; end = 6
width = end - start

divide = 1000

graph = []

for i in range(divide + 1):
  x = start + width * (i/divide)
  fx = f(x)
  graph.append((x, fx))

h = 1
x = 1.5
fx = f(x)

dot = []

diff = (f(x+h) - f(x)) / h
print("f'(x) =", diff)
dot.append((x,fx))
dot.append((x+h, f(x+h)))

line = []

for i in [-2, 0, 2]:
  xx = x + i
  yy = fx + diff * i
  line.append((xx, yy))