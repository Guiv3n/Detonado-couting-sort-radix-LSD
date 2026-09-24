# Caderno de Questões: Counting Sort & Radix Sort (LSD / MSD)

**Disciplina:** Estrutura de Dados III — Bacharelado em Ciência da Computação  
**Instituição:** Instituto Federal Sul-rio-grandense (IFSUL) — Câmpus Passo Fundo
**Docente:** Prof. Leonardo Deliyannis Constantin 
**Origem das Questões:** Exames Oficiais POSCOMP (SBC), ENADE (INEP) e Concursos Públicos de TI.

---

## PARTE I: ENUNCIADOS DAS QUESTÕES

### Questão 01 (POSCOMP — Teoria Geral de Algoritmos)
No modelo computacional de árvore de decisão para ordenação, qual é o limite inferior assintótico para o número de comparações no pior caso de qualquer algoritmo baseado estritamente na comparação entre pares de elementos?
- **A)** $\Omega(n)$
- **B)** $\Omega(\log n)$
- **C)** $\Omega(n \log n)$
- **D)** $\Omega(n^2)$
- **E)** $\Omega(2^n)$

---

### Questão 02 (POSCOMP — Algoritmos Não Comparativos)
Algoritmos como o Counting Sort e o Radix Sort superam o limite inferior de $\Omega(n \log n)$ característico dos métodos baseados em comparação porque:
- **A)** Executam partições binárias perfeitamente balanceadas similares ao Quick Sort com mediana ideal.
- **B)** São estritamente *in-place*, não necessitando de vetores auxiliares para manipulação de índices.
- **C)** Não operam por meio de comparações de ordem relativa entre pares de itens, utilizando os valores numéricos das próprias chaves diretamente como índices de endereçamento em memória.
- **D)** Pressupõem que a entrada já esteja estruturada na forma de uma Árvore Binária de Busca equilibrada.
- **E)** Utilizam filas de prioridade implementadas através de Max-Heaps recursivos.

---

### Questão 03 (POSCOMP — Estabilidade em Ordenação)
(POSCOMP adaptada) Um algoritmo de ordenação é denominado estável se preserva a ordem relativa de elementos que possuem chaves de mesmo valor. Considere as seguintes afirmativas:
1. O Counting Sort clássico garante a estabilidade se o vetor de entrada for percorrido de trás para frente (da direita para a esquerda) durante a etapa de preenchimento do vetor de saída.
2. O Radix Sort LSD funciona corretamente e produz o vetor final ordenado mesmo que a sua sub-rotina interna de ordenação de dígitos não seja estável.
3. O Quick Sort clássico é um algoritmo inerentemente estável e *in-place*.

Está(ão) correta(s):
- **A)** Apenas 1.
- **B)** Apenas 2.
- **C)** Apenas 1 e 3.
- **D)** Apenas 2 e 3.
- **E)** 1, 2 e 3.

---

### Questão 04 (POSCOMP — Análise Assintótica do Counting Sort)
Dado um vetor de $n$ números inteiros cujos valores pertencem ao intervalo discreto $[0, k]$, qual é a complexidade assintótica de tempo do Counting Sort clássico para o melhor, médio e pior caso?
- **A)** $\Theta(n)$, $\Theta(n \log n)$, $\Theta(n^2)$
- **B)** $\Theta(n + k)$ para todos os três casos.
- **C)** $\Theta(n \log k)$ no pior caso e $\Theta(n)$ no melhor caso.
- **D)** $\Theta(k)$ no melhor caso e $\Theta(n^2)$ no pior caso.
- **E)** $\Theta(n)$ no melhor caso e $\Theta(n + k)$ no pior caso.

---

### Questão 05 (Concurso Analista de TI / POSCOMP)
Em qual dos seguintes cenários o Counting Sort apresenta pior desempenho de tempo e de memória quando comparado a algoritmos de complexidade assintótica $O(n \log n)$ como o Merge Sort ou Heapsort?
- **A)** Na ordenação de $1.000.000$ de chaves inteiras compreendidas no intervalo $[0, 500]$.
- **B)** Na ordenação de $500.000$ chaves inteiras situadas no intervalo $[0, 100.000]$.
- **C)** Na ordenação de $1.000$ chaves inteiras dispersas no intervalo $[0, 10^9]$.
- **D)** Na ordenação de um vetor de $100.000$ elementos já em ordem não decrescente.
- **E)** Na ordenação de um vetor onde todas as $n$ chaves possuem valores idênticos.

---

### Questão 06 (POSCOMP — Consumo de Memória Auxiliar)
Considerando a alocação de estruturas de dados temporárias necessárias para sua execução estável, a complexidade de espaço de memória auxiliar do Counting Sort para $n$ chaves no intervalo $[0, k]$ é:
- **A)** $O(1)$, operando *in-place*.
- **B)** $O(\log n)$, correspondendo apenas à pilha de recursão.
- **C)** $O(k)$ exclusivo para a tabela de contagem, sem vetor de saída.
- **D)** $\Theta(n + k)$, necessitando de um vetor de frequências de tamanho $k+1$ e um vetor de saída de tamanho $n$.
- **E)** $O(n \cdot k)$, devido ao espalhamento em matrizes esparsas.

---

### Questão 07 (Simulado Técnico — Rastreio de Acumuladores)
Dado o vetor de entrada $A = [4, 1, 3, 4, 3]$ com chaves no intervalo de $1$ a $4$. Ao executar o Counting Sort, qual será o estado final do vetor de contagem acumulada $C$ (no qual cada posição $C[i]$ registra a quantidade de elementos menores ou iguais a $i$)?
- **A)** $C[1]=1,\; C[2]=1,\; C[3]=3,\; C[4]=5$
- **B)** $C[1]=1,\; C[2]=0,\; C[3]=2,\; C[4]=2$
- **C)** $C[1]=1,\; C[2]=2,\; C[3]=3,\; C[4]=5$
- **D)** $C[1]=0,\; C[2]=1,\; C[3]=3,\; C[4]=5$
- **E)** $C[1]=1,\; C[2]=1,\; C[3]=2,\; C[4]=5$

---

### Questão 08 (POSCOMP Adaptada — Direção do Laço no Counting Sort)
Se o laço final do Counting Sort (responsável por escrever os valores no vetor de saída $B$) for modificado para percorrer o vetor original da esquerda para a direita ($i = 0$ até $n-1$), o comportamento observado será:
- **A)** O algoritmo entrará em laço infinito por corrupção dos contadores.
- **B)** O vetor resultante continuará ordenado corretamente, porém o algoritmo perderá a propriedade de estabilidade.
- **C)** Elementos de maior valor serão posicionados antes de elementos menores.
- **D)** A complexidade temporal passará de linear para quadrática.
- **E)** O algoritmo passará a ordenar os dados *in-place*, dispensando o vetor auxiliar de saída.

---

### Questão 09 (POSCOMP — Radix Sort LSD)
O algoritmo de ordenação Radix Sort LSD (Least Significant Digit):
- **A)** Realiza partições recursivas dos dados a partir do dígito mais significativo em direção ao menos significativo.
- **B)** Ordena os elementos dígito a dígito de forma iterativa, partindo do dígito menos significativo para o mais significativo, exigindo uma sub-rotina de ordenação estável em cada passada.
- **C)** Compara diretamente o dígito mais significativo com o menos significativo e efetua trocas em tempo constante.
- **D)** Constrói um Max-Heap com base nos dígitos hexadecimais para determinar a sequência final.
- **E)** Utiliza uma tabela de dispersão com sondagem linear em cada dígito para evitar colisões.

---

### Questão 10 (POSCOMP — Complexidade do Radix Sort)
Considere a ordenação de $n$ chaves inteiras compostas por $d$ dígitos em uma base $b$, utilizando internamente o Counting Sort como sub-rotina de ordenação a cada passada. A complexidade assintótica de tempo total do Radix Sort é dada por:
- **A)** $\Theta(d \cdot n \cdot \log b)$
- **B)** $\Theta(d \cdot (n + b))$
- **C)** $\Theta(n \cdot (d + \log n))$
- **D)** $\Theta(b \cdot (n + d))$
- **E)** $\Theta(n^d / b)$

---

### Questão 11 (POSCOMP — Otimização de Parâmetros)
Deseja-se ordenar $n$ inteiros cujos valores pertencem ao intervalo $[0, n^2 - 1]$. Assinale a alternativa que descreve a abordagem assintoticamente ótima em tempo de execução:
- **A)** Empregar o Heapsort clássico, obtendo complexidade de tempo $\Theta(n \log n)$.
- **B)** Empregar o Radix Sort representando os números na base $n$, resultando em $d=2$ dígitos e complexidade linear $\Theta(n)$.
- **C)** Empregar o Counting Sort diretamente no intervalo $[0, n^2 - 1]$, garantindo tempo $\Theta(n)$.
- **D)** Empregar o Quick Sort com pivô no primeiro elemento, o qual sempre opera em tempo linear.
- **E)** Nenhum método algorítmico pode ordenar tal conjunto em tempo inferior a $\Omega(n \log n)$ por restrição da árvore de decisão.

---

### Questão 12 (Concurso Perito Criminal Federal)
Para ordenar um conjunto de $10^6$ registros cujas chaves são números inteiros de 32 bits, um desenvolvedor utiliza o Radix Sort LSD agrupando os bits em blocos de 8 bits por dígito. Quantas passadas serão executadas e qual a amplitude da base $b$ da sub-rotina de contagem?
- **A)** 8 passadas e base $b = 32$.
- **B)** 4 passadas e base $b = 256$.
- **C)** 32 passadas e base $b = 2$.
- **D)** 4 passadas e base $b = 8$.
- **E)** 16 passadas e base $b = 16$.

---

### Questão 13 (Simulado Técnico — Rastreio de Dígitos no LSD)
Considere o vetor de números decimais $V = [170, 45, 75, 90, 802, 24, 2, 66]$. Qual será a disposição dos elementos imediatamente após a conclusão da primeira passada do Radix Sort LSD (ordenação pelo dígito das unidades)?
- **A)** $[2, 24, 45, 66, 75, 90, 170, 802]$
- **B)** $[170, 90, 802, 2, 24, 45, 75, 66]$
- **C)** $[802, 2, 24, 45, 66, 75, 90, 170]$
- **D)** $[170, 90, 24, 45, 75, 66, 802, 2]$
- **E)** $[2, 802, 170, 90, 24, 45, 75, 66]$

---

### Questão 14 (Simulado Técnico — Segunda Passada do LSD)
A partir do vetor intermediário obtido na questão anterior ($[170, 90, 802, 2, 24, 45, 75, 66]$), qual será a sequência exata de elementos após a conclusão da segunda passada do Radix Sort LSD (ordenação pelo dígito das dezenas)?
- **A)** $[802, 2, 24, 45, 66, 170, 75, 90]$
- **B)** $[2, 802, 24, 45, 66, 75, 170, 90]$
- **C)** $[802, 2, 24, 45, 66, 75, 170, 90]$
- **D)** $[24, 45, 66, 75, 90, 170, 802, 2]$
- **E)** $[170, 75, 90, 802, 2, 24, 45, 66]$

---

### Questão 15 (POSCOMP — Radix Sort MSD vs LSD)
Em relação às características de projeto do Radix Sort MSD (Most Significant Digit) em comparação com o LSD (Least Significant Digit), é correto afirmar que:
- **A)** O MSD é um algoritmo estritamente iterativo que dispensa o particionamento em baldes (*buckets*).
- **B)** O LSD processa as chaves da esquerda para a direita, sendo estruturalmente superior para strings de comprimento variável.
- **C)** O MSD inicia pelo dígito mais significativo em direção ao menos significativo, particionando os dados em subgrupos e aplicando recursão em cada partição.
- **D)** O LSD apresenta complexidade exponencial no pior caso quando as chaves possuem quantidades iguais de dígitos.
- **E)** O MSD opera sem a necessidade de alocar vetores ou tabelas auxiliares de contagem.

---

### Questão 16 (Concurso Superior — Ordenação Lexicográfica)
No contexto de ordenação de palavras de comprimento variável em um dicionário, o algoritmo Radix Sort MSD apresenta vantagem conceitual sobre o LSD porque:
- **A)** Não consome espaço na pilha de execução do sistema.
- **B)** É capaz de fixar a posição ordenada de certas palavras sem necessariamente processar todos os seus caracteres quando o prefixo inicial em um balde já for exclusivo.
- **C)** Garante tempo de execução constante $O(1)$ para vetores em ordem reversa.
- **D)** Preserva a integridade das cadeias mesmo com caracteres corrompidos.
- **E)** Dispensa o conhecimento do alfabeto e da base de caracteres.

---

### Questão 17 (POSCOMP — Overhead no Radix Sort MSD)
Em implementações práticas do Radix Sort MSD puro, um problema recorrente que afeta o desempenho ao longo das chamadas recursivas mais profundas é:
- **A)** A ocorrência de divisão por zero na indexação dos baldes.
- **B)** O custo elevado (overhead) de sucessivas chamadas de funções recursivas e instanciação de vetores de contagem para baldes contendo quantidades muito pequenas de elementos.
- **C)** A perda irreversível de elementos que contêm o caractere nulo.
- **D)** A degeneração da complexidade temporal teórica para a classe não polinomial fatorial $O(n!)$.
- **E)** A necessidade de alocar espaço na pilha de execução correspondente a $O(n^3)$.

---

### Questão 18 (Concurso TI / Analista de Sistemas)
Deseja-se ordenar uma tabela de registros contendo os campos Data de Nascimento (composta por: Dia [1..31], Mês [1..12] e Ano [1900..2026]). Se for empregado o algoritmo Radix Sort LSD utilizando uma ordenação estável para cada campo individual, em qual sequência as fases devem ocorrer para garantir que a tabela final fique corretamente ordenada por data cronológica?
- **A)** 1º Ano $\rightarrow$ 2º Mês $\rightarrow$ 3º Dia.
- **B)** 1º Mês $\rightarrow$ 2º Dia $\rightarrow$ 3º Ano.
- **C)** 1º Dia $\rightarrow$ 2º Mês $\rightarrow$ 3º Ano.
- **D)** 1º Dia $\rightarrow$ 2º Ano $\rightarrow$ 3º Mês.
- **E)** A ordem de processamento dos campos é irrelevante para o algoritmo LSD.

---

### Questão 19 (POSCOMP — Restrições de Domínio)
O Counting Sort não pode ser aplicado de forma direta para ordenar números em ponto flutuante arbitrários ou tipos abstratos de dados genéricos porque:
- **A)** Algoritmos lineares não funcionam com tipos numéricos maiores que 16 bits.
- **B)** A mecânica do algoritmo exige que o valor da chave seja usado diretamente como um índice inteiro discreto de acesso à memória no vetor de contagem.
- **C)** A árvore de decisão matemática proíbe a ordenação de valores não inteiros em tempo menor que $O(n^2)$.
- **D)** Tipos abstratos não implementam a interface de cópia atômica na memória primária.
- **E)** O padrão IEEE 754 não permite a comparação de igualdade estrita entre valores de ponto flutuante.

---

### Questão 20 (POSCOMP Adaptada — Comparativo de Algoritmos)
(POSCOMP adaptada) Considere as afirmativas a respeito de algoritmos de ordenação:
1. O Quick Sort clássico apresenta complexidade de tempo média igual a $\Theta(n \log n)$ e pior caso $O(n^2)$.
2. O Counting Sort executa sempre em tempo estritamente proporcional a $\Theta(n)$, independentemente da amplitude do intervalo $k$ dos valores da entrada.
3. A preservação da corretude do Radix Sort LSD depende mandatoriamente de que a rotina de ordenação interna de cada passada seja estável.

Quais afirmativas estão corretas?
- **A)** Apenas 1.
- **B)** Apenas 2.
- **C)** Apenas 1 e 3.
- **D)** Apenas 2 e 3.
- **E)** 1, 2 e 3.

---

### Questão 21 (Concurso TI — Estabilidade e Ponteiros)
Em cenários onde o Counting Sort é aplicado para ordenar estruturas de registros por meio de uma chave inteira secundária (por exemplo, ordenar alunos por nota de 0 a 100), o mecanismo responsável por garantir que alunos com notas idênticas preservem sua ordem de inserção original consiste em:
- **A)** Equilibrar as chaves em árvores rubro-negras ou AVL durante o cálculo de dispersão.
- **B)** Percorrer o vetor de entrada a partir do final ($n-1$) até o início ($0$), alocando o item na posição indicada por $C[\text{chave}]-1$ e decrementando o valor de $C[\text{chave}]$ imediatamente em seguida.
- **C)** Preencher as posições livres do vetor com ponteiros nulos antes de cada leitura.
- **D)** Aplicar previamente uma passada do Bubble Sort sobre os elementos repetidos.
- **E)** Descartar temporariamente as ocorrências duplicadas e reinseri-las via fila circular.

---

### Questão 22 (POSCOMP — Tratamento de Valores Negativos)
Caso seja necessário utilizar o Counting Sort sobre um vetor contendo números inteiros com valores positivos e negativos dentro de um intervalo $[-M, +M]$, a adaptação padrão para evitar erros de violação de memória na indexação consiste em:
- **A)** Inverter o sinal de todos os elementos negativos antes de calcular as frequências.
- **B)** Somar o deslocamento (offset) correspondente a $+M$ a todos os elementos do vetor de entrada durante a indexação e subtrair $+M$ ao gravar no vetor de saída.
- **C)** Instanciar o vetor de contagem com ponteiros negativos alocados na memória estática.
- **D)** Ignorar os números negativos durante a contagem e ordená-los separadamente com Quick Sort.
- **E)** Dividir todos os números pelo valor de $M$ para normalizá-los entre $0$ e $1$.

---

### Questão 23 (ENADE / POSCOMP — Complexidade de Chaves de Comprimento Fixo)
Ao ordenar $n$ chaves inteiras representadas em notação binária pura com palavra fixa de 64 bits utilizando o Radix Sort LSD bit a bit ($b=2$ e $d=64$), a complexidade assintótica de tempo no pior caso é:
- **A)** $\Theta(n \log n)$
- **B)** $\Theta(n)$
- **C)** $\Theta(2^n)$
- **D)** $\Theta(n^2)$
- **E)** $\Theta(\log n)$

---

### Questão 24 (Simulado Técnico — Rastreio de Vetor com Repetições)
Dado o vetor de entrada $A = [2, 0, 2, 1, 4, 1, 0, 2]$ contendo valores discretos no intervalo $[0, 4]$. Qual é a configuração do vetor de contagem acumulada $C$ intermediário gerado pelo Counting Sort?
- **A)** $C = [2, 4, 7, 7, 8]$
- **B)** $C = [2, 2, 3, 0, 1]$
- **C)** $C = [0, 2, 4, 7, 8]$
- **D)** $C = [2, 4, 6, 7, 8]$
- **E)** $C = [1, 3, 6, 6, 8]$

---

### Questão 25 (POSCOMP — Espaço de Pilha: LSD vs MSD)
Em relação ao consumo de memória auxiliar alocada na pilha de recursão para ordenar $n$ chaves com $d$ dígitos em uma base $b$, assinale a comparação correta entre o Radix Sort LSD e o Radix Sort MSD:
- **A)** Ambos demandam profundidade de pilha de recursão de ordem $O(n^2)$.
- **B)** O Radix Sort LSD é tipicamente iterativo e consome $O(1)$ de espaço de chamadas, enquanto o Radix Sort MSD recursivo demanda espaço de pilha da ordem de $O(d + b)$.
- **C)** O Radix Sort MSD não consome memória de pilha por ser estritamente iterativo.
- **D)** O Radix Sort LSD consome memória de pilha proporcional ao quadrado da base ($b^2$).
- **E)** Ambos os algoritmos operam estritamente *in-place*, não demandando vetores ou memória auxiliar.

---

## PARTE II: GABARITO OFICIAL DEFINITIVO E JUSTIFICATIVAS

### Tabela de Respostas

| Questão | Gabarito | Conteúdo Abordado |
| :---: | :---: | :--- |
| **01** | **C** | Limite inferior da árvore de decisão ($\Omega(n \log n)$). |
| **02** | **C** | Não utilização de comparações diretas de chaves. |
| **03** | **A** | Estabilidade no Counting Sort e dependência no Radix LSD. |
| **04** | **B** | Complexidade assintótica de tempo $\Theta(n + k)$. |
| **05** | **C** | Degeneração por amplitude $k \gg n$ no Counting Sort. |
| **06** | **D** | Espaço auxiliar $\Theta(n + k)$ para vetores $C$ e $B$. |
| **07** | **A** | Cálculo das somas acumuladas de frequência. |
| **08** | **B** | Perda de estabilidade do laço progressivo no Counting Sort. |
| **09** | **B** | Funcionamento dígito a dígito do Radix Sort LSD. |
| **10** | **B** | Complexidade assintótica $\Theta(d(n + b))$ do Radix Sort. |
| **11** | **B** | Representação na base $n$ com $d=2$ para intervalo $[0, n^2-1]$. |
| **12** | **B** | Decomposição de palavras de 32 bits ($4 \times 8$ bits; base 256). |
| **13** | **B** | Rastreio da 1ª passada do Radix LSD (dígito das unidades). |
| **14** | **A** | Rastreio da 2ª passada do Radix LSD (dígito das dezenas). |
| **15** | **C** | Estrutura recursiva e divisiva do Radix Sort MSD. |
| **16** | **B** | Poda de prefixos exclusivos em baldes unitários no MSD. |
| **17** | **B** | Overhead de recursão para pequenas partições no MSD. |
| **18** | **C** | Prioridade de chaves no LSD (menor prioridade para maior prioridade). |
| **19** | **B** | Uso do valor numérico como índice de memória direta. |
| **20** | **C** | Comparação assintótica do Quick Sort e estabilidade do Radix. |
| **21** | **B** | Mecânica da varredura reversa de preenchimento estável. |
| **22** | **B** | Normalização de números negativos por translação (offset). |
| **23** | **B** | Tempo linear $\Theta(n)$ para chaves de tamanho fixo em bits. |
| **24** | **A** | Rastreio de contagens e acumuladores intermediários. |
| **25** | **B** | Consumo de pilha de recursão: LSD iterativo versus MSD recursivo. |

---

### Justificativas Técnicas

* **Questão 01 (C):** Em qualquer modelo de árvore de decisão binária para ordenação por comparações, as folhas representam as permutações possíveis das entradas ($n!$). A altura da árvore corresponde ao número de comparações no pior caso, sendo no mínimo $\lceil \log_2(n!) \rceil \approx n \log_2 n - n \log_2 e = \Omega(n \log n)$.
* **Questão 02 (C):** O Counting Sort e o Radix Sort escapam da cota $\Omega(n \log n)$ porque calculam posições de escrita avaliando a representação aritmética dos dados e utilizando-as como índices em vetores auxiliares, sem submeter os pares à operação $A[i] < A[j]$.
* **Questão 03 (A):** A afirmativa 1 é verdadeira, pois a leitura reversa do vetor original preserva a ordem relativa de chaves idênticas. A afirmativa 2 é falsa, pois se o algoritmo intermediário do LSD não for estável, a ordenação dos dígitos anteriores é desfeita. A afirmativa 3 é falsa, pois o Quick Sort clássico com particionamento de Lomuto ou Hoare não é estável.
* **Questão 04 (B):** O Counting Sort executa laços sequenciais predeterminados: inicialização do vetor de contagem ($\Theta(k)$), contagem de ocorrências ($\Theta(n)$), soma prefixada ($\Theta(k)$) e distribuição de saída ($\Theta(n)$). A ordem prévia dos dados não altera o número de passos, resultando em $\Theta(n + k)$ para todos os casos.
* **Questão 05 (C):** Quando $k = 10^9$ e $n = 1.000$, o vetor de contagem exigirá a inicialização e percurso de $10^9$ posições de memória, operando em $\Theta(10^9)$ passos. Em contrapartida, algoritmos $O(n \log n)$ realizam da ordem de $1.000 \cdot \log_2(1000) \approx 10^4$ operações.
* **Questão 06 (D):** Para garantir estabilidade e calcular os endereços, o algoritmo instancia um vetor de frequências acumuladas $C$ com $k+1$ posições e um vetor de saída $B$ com $n$ posições, perfazendo espaço auxiliar $\Theta(n + k)$.
* **Questão 07 (A):**
  * Vetor de entrada: $A = [4, 1, 3, 4, 3]$.
  * Frequências simples: $C[1]=1,\; C[2]=0,\; C[3]=2,\; C[4]=2$.
  * Somas acumuladas:
    * $C[1] = 1$
    * $C[2] = C[1] + 0 = 1$
    * $C[3] = C[2] + 2 = 3$
    * $C[4] = C[3] + 2 = 5$.
    * Configuração resultante: $[1, 1, 3, 5]$.
* **Questão 08 (B):** Percorrer o vetor no sentido progressivo ($0$ até $n-1$) aloca os elementos com chave igual nas posições finais do seu bloco correspondente primeiro, invertendo a ordem original de precedência entre elementos de mesmo valor, embora o vetor continue ordenado.
* **Questão 09 (B):** No Radix Sort LSD, a ordenação parte da posição de menor peso (unidades) e avança até a posição de maior peso. A estabilidade de cada etapa é indispensável para preservar o ordenamento relativo alcançado pelos dígitos menos significativos.
* **Questão 10 (B):** A execução envolve $d$ iterações independentes de uma rotina estável (Counting Sort). Como cada etapa de contagem sobre uma base $b$ consome $\Theta(n + b)$, o tempo global é $\Theta(d \cdot (n + b))$.
* **Questão 11 (B):** Com valores limitados a $n^2 - 1$, ao adotar a base $b = n$, qualquer elemento pode ser expresso por no máximo $d = \log_n(n^2) = 2$ dígitos. A complexidade do Radix Sort passa a ser $\Theta(2 \cdot (n + n)) = \Theta(n)$, que é estritamente linear.
* **Questão 12 (B):** Chaves com 32 bits divididas em blocos de 8 bits demandam $32 / 8 = 4$ dígitos ($d = 4$). Como cada bloco armazena 8 bits, o número de estados possíveis é $2^8 = 256$, definindo uma base $b = 256$.
* **Questão 13 (B):**
  * Entrada: $[170, 45, 75, 90, 802, 24, 2, 66]$.
  * Agrupamento pelo dígito da unidade ($x \pmod{10}$):
    * Unidade 0: $170, 90$
    * Unidade 2: $802, 2$
    * Unidade 4: $24$
    * Unidade 5: $45, 75$
    * Unidade 6: $66$
  * Vetor após a 1ª passada: $[170, 90, 802, 2, 24, 45, 75, 66]$.
* **Questão 14 (A):**
  * Entrada: $[170, 90, 802, 2, 24, 45, 75, 66]$.
  * Agrupamento pelo dígito da dezena ($\lfloor x/10 \rfloor \pmod{10}$):
    * Dezena 0: $802, 2$
    * Dezena 2: $24$
    * Dezena 4: $45$
    * Dezena 6: $66$
    * Dezena 7: $170, 75$
    * Dezena 9: $90$
  * Vetor após a 2ª passada: $[802, 2, 24, 45, 66, 170, 75, 90]$.
* **Questão 15 (C):** O Radix Sort MSD adota o paradigma de divisão e conquista. Ele divide os elementos em baldes a partir do dígito mais significativo e invoca chamadas recursivas para ordenar cada subconjunto pelo próximo dígito à direita.
* **Questão 16 (B):** Ao processar strings longas via MSD, caso um balde intermediário receba apenas um único registro, a ordenação daquele elemento em relação ao restante já está determinada, dispensando a leitura dos caracteres restantes daquela string.
* **Questão 17 (B):** Em subvetores pequenos (ex: 2 ou 3 itens), a alocação de um vetor de contagem do tamanho da base $b$ e o empilhamento da chamada recursiva geram um consumo de tempo que supera o de algoritmos elementares como o Insertion Sort.
* **Questão 18 (C):** No Radix Sort LSD, a ordenação dos dados precisa ser feita do campo de menor peso hierárquico até o de maior peso. Para datas cronológicas, a ordenação final deve refletir o Ano, desempatando pelo Mês e, sucessivamente, pelo Dia. Logo, a ordem de execução deve ser: Dia $\rightarrow$ Mês $\rightarrow$ Ano.
* **Questão 19 (B):** O mecanismo de indexação direta do Counting Sort fundamenta-se no acesso vetorial $C[A[i]]$. Vetores em memória física exigem índices numéricos inteiros, finitos e não negativos.
* **Questão 20 (C):** A afirmativa 1 é correta (Quick Sort clássico tem caso médio $\Theta(n \log n)$ e pior caso $O(n^2)$). A afirmativa 2 é falsa, pois se $k = \Omega(n^2)$, o tempo do Counting Sort se torna quadrático. A afirmativa 3 é verdadeira, pois a instabilidade da sub-rotina desordena os dígitos menos significativos.
* **Questão 21 (B):** Ao percorrer o vetor original de trás para frente, o último elemento lido de uma determinada chave ocupa o índice $C[\text{chave}]-1$. O decremento unitário assegura que a ocorrência anterior da mesma chave ocupe a posição imediatamente à esquerda, mantendo a estabilidade.
* **Questão 22 (B):** Como linguagens convencionais não operam nativamente com índices negativos em vetores, mapeia-se cada elemento $x$ para $x + M$. O menor valor possível ($-M$) torna-se $0$, e o maior ($+M$) torna-se $2M$, viabilizando a contagem.
* **Questão 23 (B):** A complexidade do Radix Sort é $\Theta(d \cdot (n + b))$. Com base fixa $b = 2$ e quantidade constante de dígitos $d = 64$, obtém-se $\Theta(64 \cdot (n + 2)) = \Theta(n)$, que é tempo linear em relação à quantidade de elementos $n$.
* **Questão 24 (A):**
  * Vetor $A = [2, 0, 2, 1, 4, 1, 0, 2]$ no intervalo $[0, 4]$.
  * Frequências simples: $C[0]=2,\; C[1]=2,\; C[2]=3,\; C[3]=0,\; C[4]=1$.
  * Somas acumuladas:
    * $C[0] = 2$
    * $C[1] = 2 + 2 = 4$
    * $C[2] = 4 + 3 = 7$
    * $C[3] = 7 + 0 = 7$
    * $C[4] = 7 + 1 = 8$.
  * Vetor resultante: $[2, 4, 7, 7, 8]$.
* **Questão 25 (B):** O Radix Sort LSD executa em laço iterativo externo de $d$ passos, usando espaço de pilha $O(1)$. Já o Radix Sort MSD gera uma árvore de chamadas recursivas cuja profundidade máxima atinge o número de dígitos $d$, demandando estruturas auxiliares da ordem de $O(d + b)$ na pilha.
