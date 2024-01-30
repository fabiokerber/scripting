print("#################################")
print("Bem vindo ao jogo de Adivinhação!")
print("#################################")

numero_secreto = 42
total_de_tentativas = 3
rodada = 1

for rodada in range(1, total_de_tentativas + 1): # +1 PARA QUE TENHA 3 TENTATIVAS

    print("Tentativa {} de {}".format (rodada, total_de_tentativas))
    chute_str = input("Digite um numero entre 1 e 100: ") #RECEBE UM VALOR
    chute = int(chute_str) #CHUTE RECEBE O VALOR DE chute_str EM integer

    if(chute < 1 or chute > 100):
        print("Você deve digitar um número entre 1 e 100!")
        continue #CAINDO NESTA CONDIÇÃO ELE VOLTA PARA O INICIO DO FOR

    acertou = chute == numero_secreto
    maior   = chute > numero_secreto
    menor   = chute < numero_secreto

    if (acertou):
        print("Você acertou!")
        break
    else:
        if(maior):
            print("Você errou abestado! Seu chute foi maior que o numero secreto.")
        elif(menor):
            print("Você errou abestado! Seu chute foi menor que o numero secreto.")

    print("Fim do jogo.")

