class Block {
	constructor(timestamp, lastHash, hash, data, nonce, difficulty) {
		this.timestamp = timestamp;
		this.lastHash = lastHash;
		this.hash = hash;
		this.data = data;
		this.nonce = nonce;
		this.difficulty = difficulty;
	}

	toString() {
		return `Block -
		Timestamp: ${this.timestamp}
		Last Hash: ${this.lastHash.substring(0, 10)}
		Hash: ${this.hash.substring(0, 10)}
		Data: ${this.data}
		Nonce: ${this.nonce}
		Difficulty: ${this.difficulty}`;
	}
}

module.exports = Block;
