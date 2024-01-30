print("#################################")
print("Bem vindo ao jogo de Adivinhação!")
print("#################################")

numero_secreto = 42

chute_str = input("Digite o seu numero: ") #RECEBE UM VALOR

print(type (chute_str)) #PRINTA TYPE STR

print("Você digitou: " , chute_str) #RECEBE O VALOR EM STRING. POR PADRAO SEMPRE ENTRA STRING

chute = int(chute_str) #CHUTE RECEBE O VALOR DE chute_str EM integer

print(type (chute)) #PRINTA TYPE INT

if ( numero_secreto == chute ):
    print("Você acertou!")
else:
    print("Você errou abestado!")

print("Fim do jogo.")