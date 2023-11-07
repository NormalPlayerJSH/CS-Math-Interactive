'''
원 그리기
원의 방정식의 내부와 외부 여부를 판별해 다른 점으로 표시하는 과정을 통해
원의 방정식을 통해 실제로 원이 그려질 수 있음을 확인한다.
또 골고루 분포된 점의 개수는 곧 넓이와 비례하므로 점의 개수의 비율과
실제 넓이의 개수의 비율을 비교해 이것이 유사함을 확인한다.

설정
타입: 점 / 변수명: outside
타입: 점 / 변수명: inside
'''

import math

def f(x, y):
    return (x-2)**2 + (y-2)**2

r = 4

inside = []
outside = []

startX = -2; endX = 6
widthX = endX - startX

startY = -2; endY = 6
widthY = endY - startY

divide = 100

for xx in range(divide + 1):
    for yy in range(divide + 1):
        x = startX + (widthX / divide) * xx
        y = startY + (widthY / divide) * yy
        fxy = f(x,y)
        if fxy <= (r**2):
            inside.append((x,y))
        else:
            outside.append((x,y))


print('점의 비율:', len(inside)/(len(inside) + len(outside)))
print('실제 넓이의 비율:', (math.pi * r * r) / ((2*r) * (2*r)))