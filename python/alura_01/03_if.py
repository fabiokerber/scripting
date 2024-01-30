print("#################################")
print("Bem vindo ao jogo de Adivinhação!")
print("#################################")

numero_secreto = 42

chute_str = input("Digite o seu numero: ") #RECEBE UM VALOR
chute = int(chute_str) #CHUTE RECEBE O VALOR DE chute_str EM integer

acertou = chute == numero_secreto
maior   = chute > numero_secreto
menor   = chute < numero_secreto

if (acertou):
    print("Você acertou!")
else:
    if(maior):
        print("Você errou abestado! Seu chute foi maior que o numero secreto.")
    elif(menor):
        print("Você errou abestado! Seu chute foi menor que o numero secreto.")

print("Fim do jogo.")