animal = '고양이'
name = '해피'
age = 4
is_adult = age >= 3

# print("우리집" + animal + name + "는" + str(age) + "살 입니다")
print("우리집", animal, name, "는" ,age, "살 입니다")
print(name +"는 어른일까요?"+ str(is_adult))

# 숫자처리

print(abs(-5))
print(pow(4, 2))
print(round(3.14))

# 랜덤함수

from random import *
print(random())  # 0.0~1.0 임의의 값 생성
print(random()*10)  
print(int(random()*10))  # 정수만 표시

print(int(random()*45)) #로또 번호 뽑기
print(randrange(1, 46)) # 1~ 46미만
print(randint(1, 45)) # 1~45이하

#문자열
sentence = '나는 소년입니다.'
print(sentence)

sentence2 = "파이썬은 쉬워요"
print(sentence2)

#슬라이싱
jumin = "990120-1234567"
print("성별 : " + jumin[7])
print("연 : " + jumin[0:2]) # index 0번째부터 2미만 즉, 0과1을 출력

#문자열 처리함수
python = 'Python is Amazing'
print(python.lower())
print(python.upper())
print(python[0].isupper())
print(len(python))
print(python.replace("Python", "java"))

index = python.index('n')
print(index)

print(python.find("java"))
# print(python.index("java"))
print(python.count("n"))

# 문자열

print('나는 %d살입니다.' % 20)
print('나는 %s살입니다.' % "이십")

print("나는 %s색과 %s색을 좋아해요." %("파란", "빨간"))

print("나는 {}살 입니다" . format(20))

print("나는 {1}색과 {0}색을 좋아해요.".format("파란", "빨간"))

print("나는 {age}색과 {color}색을 좋아해요.".format(age="파란", color="빨간"))

age = 20
color="빨간"
print(f"나는 {age}색과 {color}색을 좋아해요.")
