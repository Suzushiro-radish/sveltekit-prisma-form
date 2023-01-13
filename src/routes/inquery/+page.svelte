<script lang="ts">
	export let data;
	const records = data.records;
</script>

<head>
	<title>お問い合わせ一覧</title>
</head>
<body>
	<h1>お問い合わせ一覧</h1>

	<table>
		<thead>
			<th>id</th>
			<th>name</th>
			<th>DoB</th>
			<th>Address</th>
			<th>Postal Code</th>
			<th>Tel</th>
			<th>Email</th>
			<th>Inquery type</th>
			<th>Inquery body</th>
			<th>Created at</th>
		</thead>
		<tbody>
			{#each records as record}
				<tr>
					<td>{record.id}</td>
					<td>{record.name}</td>
					<td>{record.date_of_birth}</td>
					<td>{record.address}</td>
					<td>{record.postal_code}</td>
					<td>{record.tel}</td>
					<td>{record.email}</td>
					<td>{record.inquery_type}</td>
					<td>{record.inquery_body}</td>
					<td>{record.createdAt}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</body>

<style>
	td,
	th {
		border: solid 2px black;
	}
</style>
