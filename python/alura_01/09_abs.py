def jogar(): #DEFINICAO DE FUNCAO

    print("#################################")
    print("Bem vindo ao jogo de Adivinhação!")
    print("#################################")

    import random

    # numero_secreto = int(random.random() * 100)
    numero_secreto = random.randrange(1,101) #GERA NÚMERO ALETÓRIO ENTRE 1 ATÉ 101
    print(numero_secreto)
    total_de_tentativas = 0
    rodada = 1
    pontos = 1000

    print("Qual nível de dificuldade?")
    print("(1) Fácil - (2) Médio - (3) Difícil")

    nivel = int(input("Defina o nível: "))

    if(nivel == 1):
        total_de_tentativas = 20
    elif(nivel == 2):
        total_de_tentativas = 10
    else:
        total_de_tentativas = 5


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
            print("Você acertou e fez {} pontos!".format(pontos))
            break
        else:
            if(maior):
                print("Você errou abestado! Seu chute foi maior que o numero secreto.")
            elif(menor):
                print("Você errou abestado! Seu chute foi menor que o numero secreto.")
            pontos_perdidos = abs(numero_secreto - chute) #abs RETORNA O NÚMERO DESCONSIDERANDO O SINAL
            pontos = pontos - pontos_perdidos

        print("Fim do jogo.")