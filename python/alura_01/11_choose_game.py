# RANDOM > MODULO QUE PRECISA SER INPUTADO ANTES DE SER UTILIZADO
# https://docs.python.org/3/library/

import forca
import adivinhacao

print("#################################")
print("Escolha o jogo")
print("#################################")

print("(1) Forca (2) Adivinhação")

jogo = int(input("Qual jogo?"))

if(jogo == 1):
    print("Jogando forca")
    forca.jogar()
elif(jogo == 2):
    print("Jogando Adivinhação")
    adivinhacao.jogar()

print("Fim do jogo.")